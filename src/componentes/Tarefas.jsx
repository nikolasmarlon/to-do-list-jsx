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
                    <p>Tarefas criadas</p> <span>5 de 3</span>
                </div>
                <div>
                    <p>Concluídas</p> <span>2 de 5</span>
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


