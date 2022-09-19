import { Tarefa } from './Tarefa'
import styles from './Tarefas.module.css'
import plusIcon from '../assets/plus.svg'
import { useState } from 'react'
import Clipboard from '../assets/Clipboard.svg'


export function Tarefas(){


    const [tarefas, setTarefas] = useState([])

    const [novoTexto, setNovoTexto] = useState ('')


    function lidarComNovaTarefa () {
        event.preventDefault()

        setTarefas([...tarefas, novoTexto])

        setNovoTexto('')
    }

    function lidarComNovoTexto(){
        setNovoTexto(event.target.value)
    }

    function deletarTarefa (tarefaParaDeletar, checked){

        const novaListaSemTarefaDeletada = tarefas.filter(tarefa => {
            return tarefa !== tarefaParaDeletar
        })
        setTarefas(novaListaSemTarefaDeletada)

        if (checked === true) {
            if (contadorDeTarefasConluida > 0){
                setContadorDeTarefasConcluida(contadorDeTarefasConluida - 1)
            }
        }
        
          
    }

    const casoNaoTenhaTexto = novoTexto.length <= 0


    const [contadorDeTarefasConluida, setContadorDeTarefasConcluida] = useState(0)

    function contarTarefasConcluidas(checked) {
        
        if (checked === true) {
            if(contadorDeTarefasConluida > 0) {
                setContadorDeTarefasConcluida((estado) => {
                    return estado - 1
                })
            }
                           
        } else  {
            setContadorDeTarefasConcluida((estado) => {
                return estado + 1
            })         
        }
        
    }

    return(
        

        <div className={styles.toDoList}>  
            <div className={styles.divForm}>
                <form onSubmit={lidarComNovaTarefa}>
                    <input 
                        placeholder='Adicione uma nova tarefa' 
                        type="text" 
                        required
                        value={novoTexto}
                        minLength="4"
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
                    <p>Concluídas</p><span>{contadorDeTarefasConluida} de {tarefas.length}</span>
                </div>
                
            </header>
            <main className={styles.mainTask}>

                { tarefas.length <= 0 && 
                    <div className={styles.warnings}>
                        <img src={Clipboard} alt="Clipboard" />
                        <div>
                            <h1>Você ainda não tem tarefas cadastradas</h1>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                        
                       
                    </div>                    
                }
                
                
                {tarefas.map(tarefa => {
                    return <Tarefa 
                        key={tarefa} 
                        content={tarefa} 
                        deletarTarefaProp={deletarTarefa}
                        contarTarefasConcluidasProp = {contarTarefasConcluidas}
                    />
                })}
                
            </main>
            
        </div>
    )
}