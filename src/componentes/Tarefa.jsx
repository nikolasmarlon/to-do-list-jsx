import styles from './Tarefa.module.css'
import { Trash } from 'phosphor-react'

export function Tarefa({ content, deletarTarefa}){

    function deletarTarefa () {
        console.log(`Deletar Tarefa ${content}`)
    }

    return(
        <label for={ content } className={styles.contentTarefa}>
            <input name="task" id={ content } type="checkbox" />

            <p>{ content }</p>
            
            <button onClick={deletarTarefa} title='Deletar Tarefa'>
                <Trash size={20} />
            </button>
        </label>
        
    )
}

