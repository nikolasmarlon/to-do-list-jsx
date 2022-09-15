import { Tarefa } from './Tarefa'
import styles from './Tarefas.module.css'
import { PlusCircle } from 'phosphor-react'
import plusIcon from '../assets/plus.svg'
import { useState } from 'react'

export function Tarefas(){


    const [tarefas, setTarefas] = useState([
        'Fazer estilização do botão'
    ])

    const [novoTexto, setNovoTexto] = useState ('')


    function lidarComNovaTarefa () {
        event.preventDefault()

        setTarefas([...tarefas, novoTexto])

        setNovoTexto('')
    }

    function lidarComNovoTexto(){
        setNovoTexto(event.target.value)
    }

    function deletarTarefa (tarefa){
        console.log (`Deletar comentário ${tarefa}`)
    }

    const casoNaoTenhaTexto = novoTexto.length <= 4

    return(
        

        <div className={styles.toDoList}>  
            <div className={styles.divForm}>
                <form onSubmit={lidarComNovaTarefa}>
                    <input 
                        placeholder='Adicione uma nova tarefa' 
                        type="text" 
                        required
                        value={novoTexto}
                        onChange={lidarComNovoTexto}
                    />
                    <button disabled={casoNaoTenhaTexto}>Criar <img src={plusIcon} /></button>
                </form>
            </div>

            <header>
                <div className={styles.esquerda}>

                    <p>Tarefas criadas</p> <span>{tarefas.length}</span>
                </div>
                <div>
                    <p>Concluídas</p> <span>2 de {tarefas.length}</span>
                </div>
                
            </header>
            <main>
                {tarefas.map(tarefa => {
                    return <Tarefa 
                        key={tarefa} 
                        content={tarefa} 
                        deletarTarefa={deletarTarefa}
                    />
                })}
                
            </main>
            
        </div>
    )
}


