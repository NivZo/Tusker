<script lang="ts">
    import "./TaskSidePane.scss";
    import type { Nullable } from "../../types/UtilTypes";
    import { tasks } from "../../stores/TaskStore";
    import TaskItemTag from "../TaskItemTag/TaskItemTag.svelte";

    export let isVisible: boolean = true;
    export let taskId: Nullable<number>;
    $: task = taskId != null ? $tasks[taskId] : null;
</script>

{#if isVisible && task != null}
    <div id="task-side-pane">
        <div id="side-panel-container">
            <span id="side-panel-title">{task.title}</span>
            <hr/>
            <span id="side-panel-tags">
            {#if task.tags.length == 0}
                Add tags
            {:else}
                {#each task.tags as tag}
                    <TaskItemTag value={tag}/>
                {/each}
            {/if}
            </span>
            <hr/>
            <span>{task.description ? task.description : "Add a description"}</span>
            <hr/>
        </div>  
    </div>
{/if}