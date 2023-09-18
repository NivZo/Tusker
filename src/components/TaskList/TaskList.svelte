<script lang="ts">
    import "./TaskList.scss";
    import type { TaskDbEntry } from "../../types/Task";
    import TaskItem from "../TaskItem/TaskItem.svelte";
    import ContextMenuWrapper from "../ContextMenu/ContextMenuWrapper.svelte";
    import type { ContextMenuItem } from "../../types/ContextMenuTypes";
    import { tasks } from "../../stores/TaskStore";

    export let taskList: TaskDbEntry[];
    export let category: string | undefined = undefined;

    let showTasks: boolean = true;

    const menuItems: ContextMenuItem[] = [
        {
            name: "deleteAll",
            displayText: "Delete tasks",
            onClick: () => taskList.forEach(task => tasks.deleteTask(task.id)),
            icon: "X",
        },
    ]

</script>
<div class="task-list">
    {#if !!category && taskList.length}
    <ContextMenuWrapper {menuItems}>
        <button class="task-list-button" on:click={() => showTasks = !showTasks}>
            <span class:showTasks class="task-list-button-triangle">▶</span>
            <span class="task-list-button-text">{category} ({taskList.length})</span>
        </button>
    </ContextMenuWrapper>
    {/if}
    {#if showTasks}
        {#each taskList as task (task.id)}
            <TaskItem {task} on:togglesidepane />
        {/each}
    {/if}
</div>