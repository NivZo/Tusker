import type { WithId } from "./DbTypes";

export type Task = {
    title: string,
    description?: string,
    state: TaskState,
    tags: string[],
};

export type TaskDbEntry = Task & WithId;

export type TaskState = 
    // "Created"
    // | "Comitted"
    | "In-Progress"
    // | "Blocked"
    // | "Waiting"
    | "Finished"
    ;