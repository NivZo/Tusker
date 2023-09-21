import type { WithCreationDate, WithId } from "./DbTypes";

export type Task = {
    title: string,
    state: TaskState,
    tags: string[],
    description?: string,
    dueDate?: number,
};

export type TaskDbEntry = Task & WithId & WithCreationDate;

export type TaskState = 
    // "Created"
    // | "Comitted"
    | "In-Progress"
    // | "Blocked"
    // | "Waiting"
    | "Finished"
    ;

export type TaskSidePaneCustomEventDetails = {
    taskId: number;
}