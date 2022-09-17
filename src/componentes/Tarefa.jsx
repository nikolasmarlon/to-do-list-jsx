import styles from './Tarefa.module.css'
import { Trash } from 'phosphor-react'
import { useState } from 'react'

export function Tarefa({ content, deletarTarefaProp, contarTarefasConcluidasProp}){

    
    const [checked, setChecked] = useState(false)


    function isChecked () {       
        
        setChecked(!checked)  
        
    }

    function contar(){
        
        isChecked()
        contarTarefasConcluidasProp(checked)
        
    }
    

    function lidarComdeletarTarefa () {

        isChecked()
        deletarTarefaProp(content, checked)
        
    }

   

    return(
        <label htmlFor={ content } className={styles.contentTarefa}>

           
            <input onChange={contar} checked={checked} name="task" id={ content } type="checkbox" />
            <span></span>
            
            <p className={styles.checked}>{ content }</p>
            
            <button onClick={lidarComdeletarTarefa} title='Deletar Tarefa'>
                <Trash size={20} />
            </button>
        </label>
        
    )
}

