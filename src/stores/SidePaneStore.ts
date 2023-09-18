import { derived, writable } from 'svelte/store';
import type { SidePaneOptions } from '../types/SidePane';

const localStorageKey = "tusker/tasks";
const createSidePaneOptionsStore = () => {
    const { subscribe, set, update } = writable<SidePaneOptions>({
        isOpen: false,
        selectedTaskId: null,
    });

    return {
        subscribe,
        toggleSidePane: (taskId?: number) => update(opts => {
            if (taskId != null && taskId != opts.selectedTaskId) {
                return {
                    isOpen: true,
                    selectedTaskId: taskId,
                };
            };
            return {
                isOpen: false,
                selectedTaskId: null,
            }
        }),
    };
}

export const sidePaneOptions = createSidePaneOptionsStore();
export const isSidePaneOpen = derived(
    sidePaneOptions,
    opts => opts.isOpen,
)