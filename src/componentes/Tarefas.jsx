import { Tarefa } from './Tarefa'
import styles from './Tarefas.module.css'


export function Tarefas(){
    return(
        

        <div className={styles.toDoList}>  
            <div className={styles.form}>
                <form action="">
                    <input></input>
                    <button>Criar <span>+</span></button>
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
            </main>
            
        </div>
    )
}


