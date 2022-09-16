import './global.css'
import styles from './App.module.css'
import { Header } from './componentes/Header'
import { Tarefas } from './componentes/Tarefas'

export function App() {
  return (
    <div>
        <Header />
        <main className={styles.header}>        
          <Tarefas />      
        </main>        
    </div>
  )
}

