import { derived, writable } from 'svelte/store';
import type { Task, TaskDbEntry, TaskState } from '../types/Task';
import { storageWritable } from '../utils/localStorage';

const localStorageKey = "tusker/tasks";
const createTaskStore = () => {
    const { subscribe, set, update } = writable<boolean>(false);


    return {
        subscribe,
    };
}

export const tasks = createTaskStore();