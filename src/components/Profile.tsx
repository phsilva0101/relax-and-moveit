import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'


export function Profile() {

    const {level} = useContext(ChallengeContext)
    return (
        <div className={styles.profileContainer}>
            <img 
            src="https://github.com/phsilva0101.png" 
            alt="Paulo Henrique" />
             <div >
                <strong>Paulo Henrique</strong>
                <p>
                    <img src="icons/level.svg" alt="Seta para cima"/>
                     Level {level}</p>
            </div>
        </div>

    )
}