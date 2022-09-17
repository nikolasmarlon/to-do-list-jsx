import styles from './Tarefa.module.css'
import { Trash } from 'phosphor-react'
import { useState } from 'react'

export function Tarefa({ content, deletarTarefaProp, contarTarefasConcluidasProp}){

    
    const [checked, setChecked] = useState(false)


    function isChecked () {       
        
        setChecked(!checked)  
        
    }

    function contar(){
        console.log(checked)
        isChecked()
        contarTarefasConcluidasProp(checked)
        console.log(checked)
    }
    

    function lidarComdeletarTarefa () {

        deletarTarefaProp(content)
        
    }

   

    return(
        <label  className={styles.contentTarefa}>
            <input onChange={contar} checked={checked} name="task" id={ content } type="checkbox" />
            <span></span>
            
            <p className={styles.checked}>{ content }</p>
            
            <button onClick={lidarComdeletarTarefa} title='Deletar Tarefa'>
                <Trash size={20} />
            </button>
        </label>
        
    )
}

