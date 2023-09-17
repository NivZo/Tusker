import { writable, type Invalidator, type Subscriber, type Unsubscriber, type Writable } from "svelte/store";

export const readFromLocalStorage = <T>(key: string, defaultValue: T): T => {
    const json = window.localStorage.getItem(key);
    if (json) {
        const parsed = JSON.parse(json);
        return parsed as T;
    }

    return defaultValue;
}

export const subscribeStoreToLocalStorage = <T>(key: string, subscribe: (this: void, run: Subscriber<T>, invalidate?: Invalidator<T> | undefined) => Unsubscriber): void => {
    subscribe(current => {
        window.localStorage.setItem(key, JSON.stringify(current));
    });
}

export const storageWritable = <T>(key: string, defaultValue: T): Writable<T> => {
    const stored = readFromLocalStorage<T>(key, defaultValue);
    const { subscribe, set, update } = writable<T>(stored);
    subscribeStoreToLocalStorage(key, subscribe);

    return { subscribe, set, update };
}