import { derived } from 'svelte/store';
import type { Task, TaskDbEntry, TaskState } from '../types/Task';
import { storageWritable } from '../utils/localStorage';

const localStorageKey = "tusker/tasks";
const createTaskStore = () => {
    const { subscribe, set, update } = storageWritable<TaskDbEntry[]>(localStorageKey, []);

    let getNextKey = (ts: TaskDbEntry[]): number => ts.length ? Math.max(...ts.map(task => task.id)) + 1 : 0;

    let getTaskById = (ts: TaskDbEntry[], taskId: number): TaskDbEntry => ts.filter(task => task.id == taskId)[0];

    let addTask = (task: Task) => update(ts => [
        ...ts,
        { id: getNextKey(ts), ...task },
    ]);

    let updateTask = (taskId: number, action: (t: Task) => Task) => update(ts => ts.map(
        task => {
            if (task.id == taskId) {
                task = { id: taskId, ...action(getTaskById(ts, taskId)) };
            }
            return task;
        }
    ))

    return {
        subscribe,
        set,
        updateTask,
        toggleTaskState: (taskId: number, newState?: TaskState) => updateTask(taskId, (t: Task) => ({
            ...t, state: newState ?? (t.state == "Finished" ? "Created" : "Finished"),
        })),
        addTask,
        addTasks: (tasks: Task[]) => { tasks.forEach(addTask) },
        addTaskByTitle: (title: string) => addTask({
            title,
            state: "Created",
            tags: [],
        }),
        deleteTask: (taskId: number) => update(ts => ts.filter(task => task.id != taskId)),
        deleteTasks: () => set([]),
        deleteFinishedTasks: () => update(ts => ts.filter(task => task.state != "Finished")),
    };
}

export const tasks = createTaskStore();
export const unfinishedTasks = derived(
    tasks,
    $tasks => $tasks.filter(task => task.state != "Finished"),
);
export const finishedTasks = derived(
    tasks,
    $tasks => $tasks.filter(task => task.state == "Finished"),
);