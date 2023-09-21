import { derived, type Readable } from 'svelte/store';
import type { Task, TaskDbEntry, TaskState } from '../types/Task';
import { storageWritable } from '../utils/localStorage';
import type { Nullable } from '../types/UtilTypes';

const localStorageKey = "tusker/tasks";
const createTaskStore = () => {
    const { subscribe, set, update } = storageWritable<TaskDbEntry[]>(localStorageKey, []);

    let getNextKey = (ts: TaskDbEntry[]): number => ts.length ? Math.max(...ts.map(task => task.id)) + 1 : 0;

    let getTaskById = (ts: TaskDbEntry[], taskId: number): TaskDbEntry => ts.filter(task => task.id == taskId)[0];

    let addTask = (task: Task) => update(ts => [
        ...ts,
        { 
            id: getNextKey(ts),
            creationDate: Date.now(),
            ...task,
         },
    ]);

    let updateTask = (taskId: number, action: (t: Task) => Task) => update(ts => ts.map(
        task => {
            if (task.id == taskId) {
                task = { ...task, ...action(getTaskById(ts, taskId)) };
            }
            return task;
        }
    ))

    return {
        subscribe,
        set,
        updateTask,
        toggleTaskState: (taskId: number, newState?: TaskState) => updateTask(taskId, (t: Task) => ({
            ...t, state: newState ?? (t.state == "Finished" ? "In-Progress" : "Finished"),
        })),
        addTask,
        addTasks: (tasks: Task[]) => { tasks.forEach(addTask) },
        addTaskByTitle: (title: string) => addTask({
            title,
            state: "In-Progress",
            tags: [],
        }),
        deleteTask: (taskId: number) => update(ts => ts.filter(task => task.id != taskId)),
        deleteTasks: () => set([]),
        deleteFinishedTasks: () => update(ts => ts.filter(task => task.state != "Finished")),
    };
}

export const tasks = createTaskStore();
export const getTaskById: (taskId: number) => Readable<Nullable<TaskDbEntry>> = 
    (taskId: number) => derived(
        tasks,
        $tasks => {
            let task = $tasks.filter(task => task.id == taskId);
            if (task.length == 1) { return task[0] }
            return null;
        })
export const unfinishedTasks = derived(
    tasks,
    $tasks => $tasks.filter(task => task.state != "Finished"),
);
export const finishedTasks = derived(
    tasks,
    $tasks => $tasks.filter(task => task.state == "Finished"),
);