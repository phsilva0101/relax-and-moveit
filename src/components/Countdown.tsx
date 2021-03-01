import { useState, useEffect, useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'


export function Countdown(){
    /* --------------Variaveis --------------*/
   const { 
    minutes, 
    seconds, 
    hasBeenFinished, 
    isActive, 
    resetCountdown,
     startCountdown } = useContext(CountdownContext)

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    
  
    return(
        <div>
            <div className={styles.CountdownContainer}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                    <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>  {/* Fim da div CountdownContainer */ }

            {hasBeenFinished ? ( /* -> Ternario para testar se o contdown está finalizado ou nao*/
                 <button 
                    disabled 
                    className={styles.countdownButton}>
                    Ciclo encerrado
                 </button>

            ) : (
                <> {/* -> Tag FRAGMENT PROPRIA DO REACT */}
                 { isActive ? (   /* -> Ternario para alternar os aparecimento de cada botão*/
                 <button 
                    type="button" 
                    className= {`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}>
                     Abandonar o ciclo
                 </button>

            ) : (
                <button 
                    type="button" 
                    className={styles.countdownButton}
                    onClick={startCountdown}>
                     Iniciar o ciclo
                 </button>
            )
        }

                
                </>
            )
        }

           
           

            

        </div>
    )
}