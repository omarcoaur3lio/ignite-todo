import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <TaskList />
      </div>
    </>
  )
}

export default App
