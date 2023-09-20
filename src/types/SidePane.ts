import type { Nullable } from "./UtilTypes";

export type GUIOptions = {
    sidePane: {
        isOpen: boolean,
        selectedTaskId: Nullable<number>,
    },
    contextMenu: {
        isOpen: boolean,
    }
}