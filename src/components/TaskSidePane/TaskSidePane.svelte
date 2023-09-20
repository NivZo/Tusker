<script lang="ts">
    import "./TaskSidePane.scss";
    import { getTaskById, tasks } from "../../stores/TaskStore";
    import TaskItemTag from "../TaskItemTag/TaskItemTag.svelte";
    import { guiOptions } from "../../stores/GUIOptionsStore";
    import { uniqueArray } from "../../utils/dataStructure";

    $: task = $guiOptions.sidePane.selectedTaskId != null ? getTaskById($guiOptions.sidePane.selectedTaskId) : null;
</script>

{#if $guiOptions.sidePane.isOpen && $task != null}
    <div id="task-side-pane">
        <div id="side-panel-container">
            <span id="side-panel-title" class="side-panel-row">
                <input type="text" placeholder="Task title"
                    value={$task.title}
                    on:change={event => $task != null && tasks.updateTask($task.id, t => ({
                        ...t,
                        title: event.currentTarget.value.length ? event.currentTarget.value : t.title,
                    }))} />
            </span>
            <hr/>
            <span id="side-panel-tags" class="side-panel-row">
            {#if $task.tags.length >= 0}
                {#each $task.tags as tag}
                    <TaskItemTag taskId={$task.id} value={tag}/>
                {/each}
            {/if}
            <input type="text" placeholder="Add tags"
                    on:change={event => $task != null && tasks.updateTask($task.id, t => {
                        let newTask = {
                            ...t,
                            tags: uniqueArray([...t.tags, ...event.currentTarget.value.split(' ')]),
                            };
                        event.currentTarget.value = '';
                        return newTask;
                    })} />
            </span>
            <hr/>
            <span id="side-panel-description" class="side-panel-row">
                <input type="text" placeholder="Add a description"
                    value={!!$task.description ? $task.description : null}
                    on:change={event => $task != null && tasks.updateTask($task.id, t => ({
                        ...t,
                        description: event.currentTarget.value,
                    }))} />
            </span>
            <hr/>
        </div>  
    </div>
{/if}