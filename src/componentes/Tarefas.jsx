import { Tarefa } from './Tarefa'
import styles from './Tarefas.module.css'
import { PlusCircle } from 'phosphor-react'
import plusIcon from '../assets/plus.svg'
import { useState } from 'react'

export function Tarefas(){


    const [tarefas, setTarefas] = useState([
        1,
        2,
    ])


    function handleTarefa () {
        event.preventDefault()

        setTarefas([...tarefas, tarefas.length + 1])
    }

    return(
        

        <div className={styles.toDoList}>  
            <div className={styles.divForm}>
                <form onSubmit={handleTarefa}>
                    <input placeholder='Adicione uma nova tarefa' type="text" />
                    <button>Criar <img src={plusIcon} /></button>
                </form>
            </div>

            <header>
                <div className={styles.esquerda}>

                    <p>Tarefas criadas</p> <span>5</span>
                </div>
                <div>
                    <p>Concluídas</p> <span>2 de 5</span>
                </div>
                
            </header>
            <main>
                {tarefas.map(tarefa => {
                    return <Tarefa />
                })}
                
            </main>
            
        </div>
    )
}


