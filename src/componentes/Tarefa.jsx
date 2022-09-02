import styles from './Tarefa.module.css'
import tarefaConcluida from '../assets/tarefaConcluida.svg'
import tarefaEmAberto from '../assets/tarefaEmAberto.svg'
import { Trash } from 'phosphor-react'

export function Tarefa(){
    return(
        <div className={styles.contentTarefa}>
            <img src={tarefaConcluida}/> <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p><span><Trash size={20} /></span>
        </div>
        
    )
}

