import { Tarefa } from './Tarefa'
import styles from './Tarefas.module.css'
import { PlusCircle } from 'phosphor-react'
import plusIcon from '../assets/plus.svg'
import { useState } from 'react'

export function Tarefas(){


<<<<<<< HEAD
<<<<<<< HEAD
    const [tarefas, setTarefas] = useState([
        'Fazer estilização do botão'
    ])
=======
    const [tarefas, setTarefas] = useState([])
>>>>>>> parent of 412b7f9 (update)
=======
    const [tarefas, setTarefas] = useState([
        'Fazer estilização do botão'
    ])
>>>>>>> parent of e87b808 (contador de tarefas e excluir tarefas)

    const [novoTexto, setNovoTexto] = useState ('')


    function lidarComNovaTarefa () {
        event.preventDefault()

        setTarefas([...tarefas, novoTexto])

        setNovoTexto('')
    }

    function lidarComNovoTexto(){
        setNovoTexto(event.target.value)
    }

    function deletarTarefa (tarefaParaDeletar){

        const novaListaSemTarefaDeletada = tarefas.filter(tarefa => {
            return tarefa !== tarefaParaDeletar
        })
        setTarefas(novaListaSemTarefaDeletada)
<<<<<<< HEAD

        
<<<<<<< HEAD
=======
        if (contadorDeTarefasConluida > 0){
            setContadorDeTarefasConcluida(contadorDeTarefasConluida - 1)
        }
        
=======
>>>>>>> parent of e87b808 (contador de tarefas e excluir tarefas)
        
>>>>>>> parent of 412b7f9 (update)
    }

    const casoNaoTenhaTexto = novoTexto.length <= 4


    const [contadorDeTarefasConluida, setContadorDeTarefasConcluida] = useState(0)

    function contarTarefasConcluidas(checked) {
        console.log(contadorDeTarefasConluida)
        if (checked === true) {
            setContadorDeTarefasConcluida((estado) => {
                return estado - 1
            })               
            } else {
                setContadorDeTarefasConcluida((estado) => {
                    return estado + 1
                })        
            
            }
        console.log(contadorDeTarefasConluida)
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
                    <p>Concluídas</p> <span>{contadorDeTarefasConluida} de {tarefas.length}</span>
                </div>
                
            </header>
            <main>
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


