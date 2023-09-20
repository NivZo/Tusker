<script lang="ts">
    import { tasks } from "../../stores/TaskStore";
    import ContextMenuWrapper from "../ContextMenu/ContextMenuWrapper.svelte";
import "./TaskItemTag.scss";

    export let value: string;
    export let taskId: number;

    let menuItems = [
        {
            name: "deleteTag",
            onClick: () => tasks.updateTask(taskId, task => ({
                ...task,
                tags: task.tags.filter(tag => tag != value),
            })),
            displayText: "Delete tag",
            icon: "X",
            states: ["In-Progress", "Finished"],
        },
    ]
</script>

<ContextMenuWrapper {menuItems}>
    <div class="task-item-tag">
        {value}
    </div>
</ContextMenuWrapper>

