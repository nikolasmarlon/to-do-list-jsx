import styles from './Tarefa.module.css'
import tarefaConcluida from '../assets/tarefaConcluida.svg'
import tarefaEmAberto from '../assets/tarefaEmAberto.svg'
import { Trash } from 'phosphor-react'

export function Tarefa({ content, deletarTarefa}){

    function deletarTarefa () {
        console.log(`Deletar Tarefa ${content}`)
    }

    return(
        <div className={styles.contentTarefa}>
            <img src={tarefaEmAberto}/> 
            <p>{ content }</p>
            <button onClick={deletarTarefa} title='Deletar Tarefa'>
                <Trash size={20} />
            </button>
        </div>
        
    )
}

