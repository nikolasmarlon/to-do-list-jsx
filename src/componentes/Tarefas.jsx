import { Tarefa } from './Tarefa'
import styles from './Tarefas.module.css'
import { PlusCircle } from 'phosphor-react'
import plusIcon from '../assets/plus.svg'

export function Tarefas(){
    return(
        

        <div className={styles.toDoList}>  
            <div className={styles.divForm}>
                <form action="">
                    <input placeholder='Adicione uma nova tarefa' type="text" />
                    <button>Criar <img src={plusIcon} /></button>
                </form>
            </div>

            <header>
                <div>
                    <p>Tarefas criadas <span>5</span></p>
                </div>
                <div>
                    <p>Concluídas <span>2 de 5</span></p>
                </div>
                
            </header>
            <main>
                <Tarefa />
                <Tarefa />
                <Tarefa />
                <Tarefa />
            </main>
            
        </div>
    )
}


