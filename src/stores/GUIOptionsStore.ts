import { derived, writable } from 'svelte/store';
import type { GUIOptions } from '../types/SidePane';

const createGUIOtionsStore = () => {
    const { subscribe, set, update } = writable<GUIOptions>({
        sidePane: {
            isOpen: false,
            selectedTaskId: null,
        },
        contextMenu: {
            isOpen: false,
        }
    });

    return {
        subscribe,
        toggleSidePane: (taskId?: number) => update(opts => {
            if (taskId != null && taskId != opts.sidePane.selectedTaskId) {
                return {
                    ...opts,
                    sidePane: {
                        isOpen: true,
                        selectedTaskId: taskId,
                    }
                };
            };
            return {
                ...opts,
                sidePane: {
                    isOpen: false,
                    selectedTaskId: null,
                }
            }
        }),
        toggleContextMenu: () => update(opts => {
            return {
                ...opts,
                contextMenu: {
                    isOpen: !opts.contextMenu.isOpen,
                }
            }
        }),
        updateContextMenu: (isOpen: boolean) => update(opts => {
            return {
                ...opts,
                contextMenu: { isOpen }
            }
        }),
    };
}

export const guiOptions = createGUIOtionsStore();
export const isSidePaneOpen = derived(
    guiOptions,
    opts => opts.sidePane.isOpen,
)