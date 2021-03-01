import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal () {

    const {level, closeLevelUpModal} = useContext(ChallengeContext)

   
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns!!</strong>

                <p>Você atingiu um novo nivel :D</p>

                <button>
                    <img src="/icons/close.svg" 
                    alt="Fechar modal"
                    onClick={closeLevelUpModal}
                    
                    />
                </button>

            </div>
        </div>
    )
}