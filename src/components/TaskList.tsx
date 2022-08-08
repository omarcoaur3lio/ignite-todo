import { useState } from "react";
import { PlusCircle, Trash } from "phosphor-react";
import styles from './TaskList.module.css';

type Task = {
    id: number;
    title: string;
    isDone: boolean;
}

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    function handleCreateNewTask() {
        if (newTaskTitle.trim() === '') {
            return;
          } else {
            setTasks([...tasks, {
              id: Math.random(),
              title: newTaskTitle,
              isDone: false
            }]);
          }
          console.log(tasks);
    }
    

    return(
        <>
            <div className={styles.inputGroup}>
                <input
                    type='text'
                    placeholder='Adicione uma nova tarefa'
                    className={styles.input}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    value={newTaskTitle}
                />
                <button
                    type='submit'
                    className={styles.button}
                    onClick={handleCreateNewTask}
                >
                    Criar
                    <PlusCircle size={18} />
                </button>
            </div>
            <main className={styles.mainContainer}>
                <div className={styles.mainHeader}>
                    <p>Tarefas criadas
                        <span>5</span>
                    </p>
                    <p>Concluídas
                        <span>{`2 de 5`}</span>
                    </p>
                </div>
                <ul className={styles.listTasks}>
                    <li>
                        <div>
                            {/* <label className={styles.checkboxContainer}>
                                <input
                                    type="checkbox"
                                    readOnly
                                    // checked={task.isDone}
                                    onClick={() => { }}
                                />
                                <span className={styles.teste}></span>
                            </label> */}

{/* ref: https://codepen.io/imomer/pen/qoLVZg */}
<label className={styles.containerCheckbox}>
  <input type="checkbox" />
  <span className={styles.checkmark}></span>
</label>

                            <p>Essa é uma tarefa muito legal</p>
                        </div>

                        <button className={styles.deleteTask} type="button">
                            <Trash size={16} />
                        </button>
                    </li>
                </ul>
            </main>
            
        </>
    )
}