import type { Invalidator, Subscriber, Unsubscriber, Updater } from "svelte/motion";

export type StoreSubscribe<T> = (this: void, run: Subscriber<T>, invalidate?: Invalidator<T> | undefined) => Unsubscriber;
export type StoreSet<T> = (this: void, value: T[]) => void;
export type StoreUpdate<T> = (this: void, updater: Updater<T[]>) => void;