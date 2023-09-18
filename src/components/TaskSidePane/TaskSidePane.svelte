<script lang="ts">
    import "./TaskSidePane.scss";
    import { tasks } from "../../stores/TaskStore";
    import TaskItemTag from "../TaskItemTag/TaskItemTag.svelte";
    import { sidePaneOptions } from "../../stores/SidePaneStore";

    $: task = $sidePaneOptions.selectedTaskId != null ? $tasks[$sidePaneOptions.selectedTaskId] : null;
</script>

{#if $sidePaneOptions.isOpen && task != null}
    <div id="task-side-pane">
        <div id="side-panel-container">
            <span id="side-panel-title">{task.title}</span>
            <hr/>
            <span id="side-panel-tags">
            {#if task.tags.length >= 0}
                {#each task.tags as tag}
                    <TaskItemTag value={tag}/>
                {/each}
            {/if}
            <input type="text" placeholder="Add tags"
                    on:change={event => task != null && tasks.updateTask(task.id, t => {
                        let newTask = {
                            ...t,
                            tags: [...t.tags, ...event.currentTarget.value.split(' ')],
                            };
                        event.currentTarget.value = '';
                        return newTask;
                    })} />
            </span>
            <hr/>
            <span id="side-panel-description">
                <input type="text" placeholder="Add a description"
                    value={!!task.description ? task.description : null}
                    on:change={event => task != null && tasks.updateTask(task.id, t => ({
                        ...t,
                        description: event.currentTarget.value,
                    }))} />
            </span>
            <hr/>
        </div>  
    </div>
{/if}