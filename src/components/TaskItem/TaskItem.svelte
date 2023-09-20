<script lang="ts">
    import "./TaskItem.scss";
    import DingAudio from "../../assets/audio/ding.mp3";
    import type { TaskDbEntry, TaskState } from "../../types/Task";
    import { tasks } from "../../stores/TaskStore";
    import ContextMenuWrapper from "../ContextMenu/ContextMenuWrapper.svelte";
    import type { ContextMenuItem } from "../../types/ContextMenuTypes";
    import { taskBreakdown } from "../../utils/gpt";
    import TaskItemTag from "../TaskItemTag/TaskItemTag.svelte";
    import { guiOptions } from "../../stores/GUIOptionsStore";

    export let task: TaskDbEntry;
    let audio = new Audio(DingAudio);

    type StateDependentContextMenuItem = ContextMenuItem & {
        states: TaskState[];
    };
    let menuItems: StateDependentContextMenuItem[] = [
        {
            name: "toggleTask",
            onClick: () => tasks.toggleTaskState(task.id, "In-Progress"),
            displayText: "Mark as not finished",
            icon: "⍻",
            states: ["Finished"],
        },
        {
            name: "toggleTask",
            onClick: () => tasks.toggleTaskState(task.id, "Finished"),
            displayText: "Mark as finished",
            icon: "✓",
            states: ["In-Progress"],
        },
        {
            name: "breakdownTask",
            onClick: async () => {
                (await taskBreakdown(task.title))
                .map(t => ({
                    ...task,
                    ...t,
                }))
                .forEach(tasks.addTask);
                tasks.deleteTask(task.id);
            },
            displayText: "Breakdown",
            icon: "☄",
            states: ["In-Progress"],
        },
        {
            name: "deleteTask",
            onClick: () => tasks.deleteTask(task.id),
            displayText: "Delete task",
            icon: "X",
            states: ["In-Progress", "Finished"],
        },
    ];

    $: isFinished = task.state == "Finished";

    let onCheck = (event: Event) => {
        tasks.toggleTaskState(task.id);

        if ((event?.target as HTMLInputElement).checked) {
            audio.play();
        }
    }
</script>

<ContextMenuWrapper menuItems={menuItems.filter(mi => mi.states.includes(task.state))}>
    <button class="task-item" class:isFinished on:click={() => guiOptions.toggleSidePane(task.id)}>
        <span class="task-item-checkbox">
            <input
                type=checkbox
                bind:checked={isFinished}
                on:click={onCheck}
            />
        </span>
        <span class="task-item-title">{task.title}</span>
        {#if !$guiOptions.sidePane.isOpen}
        <span class="task-item-tags">
            {#each task.tags as tag}
                <TaskItemTag taskId={task.id} value={tag}/>
            {/each}
        </span>
        {/if}
    </button>
</ContextMenuWrapper>
