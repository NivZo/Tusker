import type { TaskDbEntry } from "./Task";

export type ContextMenuItem = {
    name: string,
    displayText: string,
    onClick: () => void,
    icon?: string,
    class?: string,
}