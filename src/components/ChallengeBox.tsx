import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengeContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSuceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailde() {
        resetChallenge();
        resetCountdown();
    }


    return(
        <div className={styles.ChallengeBoxContainer}>
           { activeChallenge ? (
               <div className={styles.challengeActive}>
                   <header>
                       Ganhe {activeChallenge.amount} XP :)
                   </header>

                   <main>
                       <img src={`icons/${activeChallenge.type}.svg`} />
                       <strong>Exercite-se!!!</strong >
                       <p>{activeChallenge.description}</p>
                   </main>

                   <footer>
                       <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailde}
                            >
                                Falhei
                       </button>

                       <button 
                            type="button"
                            className={styles.challengeSuceededButton}
                            onClick={handleChallengeSuceeded}

                            >
                                Completei
                       </button>
                   </footer>
               </div>
           ) : (
                 <div className={styles.challengeNotActive}>
                 <strong>Finalize um ciclo para receber desafios a serem completados</strong>
                     <p>
                         <img src="icons/level-up.svg" alt=""/>
                         Complete-os e ganhe experiência e avance de level
                     </p>  
             </div> 
           )}         
        </div>
    )
}