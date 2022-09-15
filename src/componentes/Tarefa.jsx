import styles from './Tarefa.module.css'
import { Trash } from 'phosphor-react'
import { useState } from 'react'

export function Tarefa({ content, deletarTarefa}){

    const [checked, setChecked] = useState(true)

    function isChecked () {
        setChecked(!checked)
        console.log(checked)
    }


    const [contadorDeTarefasConluida, setContadorDeTarefasConcluida] = useState(0)

    

    function deletarTarefa () {
        console.log(`Deletar Tarefa ${content}`)
    }

    

    return(
        <label for={ content } className={styles.contentTarefa}>
            <input onChange={isChecked} name="task" id={ content } type="checkbox" />
            <span></span>
            <p className={styles.checked}>{ content }</p>
            
            <button onClick={deletarTarefa} title='Deletar Tarefa'>
                <Trash size={20} />
            </button>
        </label>
        
    )
}

