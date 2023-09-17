<script lang="ts">
    import "./TaskItem.scss";
    import type { TaskDbEntry } from "../../types/Task";
    import { tasks } from "../../stores/TaskStore";
    import ContextMenuWrapper from "../ContextMenu/ContextMenuWrapper.svelte";

    export let task: TaskDbEntry;

    $: isFinished = task.state == "Finished";

    $: menuItems = [
        {
            name: "toggleTask",
            onClick: () =>
                tasks.toggleTaskState(
                    task.id,
                    isFinished ? "Created" : "Finished"
                ),
            displayText: isFinished
                ? "Mark as not finished"
                : "Mark as finished",
            icon: isFinished ? "⍻" : "✓",
        },
        {
            name: "deleteTask",
            onClick: () => tasks.deleteTask(task.id),
            displayText: "Delete task",
            icon: "X",
        },
    ];
</script>

<ContextMenuWrapper {menuItems}>
    <div class="task-item" class:isFinished>
        <span class="task-item-checkbox">
            <input
                type="checkbox"
                bind:checked={isFinished}
                on:click={() => tasks.toggleTaskState(task.id)}
            />
        </span>
        <span class="task-item-title">{task.title}</span>
    </div>
</ContextMenuWrapper>
