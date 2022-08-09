import { useState } from "react";
import { ClipboardText, PlusCircle, Trash } from "phosphor-react";
import styles from './TaskList.module.css';

type Task = {
    id: number;
    title: string;
    isDone: boolean;
}

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [completedTasksCount, setCompletedTasksCount] = useState(0);

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
          setNewTaskTitle('');
    }

    function handleToggleTaskStatus(id: number) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.isDone = !task.isDone;
                setCompletedTasksCount(task.isDone ? completedTasksCount + 1 : completedTasksCount - 1);
            }
            return task;
        }));
    }

    function handleDeleteTask(id: number) {
        tasks.map(task => {
            if (task.id === id) {
                setCompletedTasksCount(task.isDone ? completedTasksCount - 1 : completedTasksCount);
            }
        });
        setTasks(tasks.filter(task => task.id !== id));
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
                        <span>{tasks.length}</span>
                    </p>
                    <p>Concluídas
                        <span>{!tasks.length ? 0 : `${completedTasksCount} de ${tasks.length}`}</span>
                    </p>
                </div>
                <ul className={tasks.length ? styles.listTasks : styles.listTaskEmpty}>
                    {!tasks.length ? (
                        <div className={styles.emptyListContainer}>
                            <ClipboardText size={56}/>
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    ) : (
                        tasks.map(task => (
                            <li key={task.id}>
                                <div className={task.isDone ? styles.taskCompleted : ''}>
                                    <label className={styles.containerCheckbox}>
                                        <input
                                            type="checkbox"
                                            checked={task.isDone}
                                            onClick={() => handleToggleTaskStatus(task.id)}
                                        />
                                        <span className={styles.checkmark}></span>
                                    </label>
                                    <p>{task.title}</p>
                                </div>
                                <button 
                                    className={styles.deleteTask} 
                                    type="button"
                                    onClick={() => handleDeleteTask(task.id)}
                                >
                                    <Trash size={18} />
                                </button>
                            </li>
                        ))
    
                    )}
                </ul>
            </main>
            
        </>
    )
}