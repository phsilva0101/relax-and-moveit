import React, { createContext, ReactNode, useState, useContext, useEffect} from 'react'
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import { CountdownContext } from './CountdownContext'
import { LevelUpModal } from '../components/LevelUpModal'

interface Challenge{
    type: 'body' | 'eye'
    description: string;
    amount: number;
}

interface ChallengeContextData{
    level: number; 
    currentExperience: number;
    experienceToNextLevel: number;
    challengeCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;


}

interface ChallengeProviderProps {
    children: ReactNode
    level:number;
    currentExperience: number;
    challengeCompleted: number;
}


export const  ChallengeContext = createContext({}as ChallengeContextData)


export function ChallengeProvider({children , ...rest}  : ChallengeProviderProps){
    const { resetCountdown} = useContext(CountdownContext)

    const  [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState( rest.currentExperience ?? 0 )
    const [challengeCompleted, setChallengeCompleted] = useState( rest.challengeCompleted ?? 0)
    const [time, setTime] = useState(0.05 * 60)
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    const [activeChallenge, setactiveChallenges] = useState(null)

    const [isLevelUpModalOpen, setIsLevelModalOpen] = useState(false)

    useEffect( () => {
        Notification.requestPermission();
    }, [])

    useEffect( () => {
       Cookies.set('level', String(level))
       Cookies.set('currentExperience', String(currentExperience))
       Cookies.set('challengeCompleted', String(challengeCompleted))


    }, [level, currentExperience, challengeCompleted])



    function startNewChallenge(){
        const challengesRandomIndex = Math.floor(Math.random() * challenges.length) 
        const challenge = challenges[challengesRandomIndex]

        setactiveChallenges(challenge)

        new Audio('/notification.mp3').play();
        
        if (Notification.permission === 'granted') {
            new Notification ('Novo desafio disponivel! :)', {
                body: `Valendo ${challenge.amount}xp`
            })
        }
    }

    function levelUp (){
      setLevel ( level + 1 )
      setIsLevelModalOpen(true)
      
    }

    function closeLevelUpModal() {
        setIsLevelModalOpen(false)
    }



    function resetChallenge(){
        setactiveChallenges(null)
    }

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience > experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
            setChallengeCompleted(challengeCompleted + 1)
            setactiveChallenges(null)
        }
        setCurrentExperience(finalExperience)
        setChallengeCompleted(challengeCompleted + 1)
        setactiveChallenges(null)

        


    }
    

    return(
    <ChallengeContext.Provider 
    value={{ 
        level, 
        currentExperience, 
        experienceToNextLevel,
        challengeCompleted, 
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal
        }}
    >
        {children}
       { isLevelUpModalOpen && < LevelUpModal/>}
    </ ChallengeContext.Provider>

    )

}
