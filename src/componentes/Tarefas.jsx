import { Tarefa } from './Tarefa'
import styles from './Tarefas.module.css'
import { PlusCircle } from 'phosphor-react'


export function Tarefas(){
    return(
        

        <div className={styles.toDoList}>  
            <div className={styles.divForm}>
                <form action="">
                    <input placeholder='Adicione uma nova tarefa' type="text" />
                    <button>Criar <PlusCircle className={styles.plus} size={16} /></button>
                </form>
            </div>

            <header>
                <div>
                    <h3>Tarefas criadas <span>5</span></h3>
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


