import styles from './Tarefa.module.css'
import tarefaConcluida from '../assets/tarefaConcluida.svg'
import tarefaEmAberto from '../assets/tarefaEmAberto.svg'
import { Trash } from 'phosphor-react'

export function Tarefa({ content }){
    return(
        <div className={styles.contentTarefa}>
            <img src={tarefaConcluida}/> <p>{ content }</p><span><Trash size={20} /></span>
        </div>
        
    )
}

