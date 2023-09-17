<script lang="ts">
    import { tasks } from "../../stores/TaskStore";
    import { taskBreakdown } from "../../utils/gpt";
    import "../TaskItem/TaskItem.scss";
    import "./ManualTaskInput.scss";

    let textbox: HTMLElement;
    let inputValue: string;
    let isSmartMode: boolean = false;
    let isFocus: boolean = false;
    let isLoading: boolean = false;
    $: placeholder = (isSmartMode ? "Describe your tasks" : "Add a task\t\t") + 
                    (isFocus ? "\t(Press Ctrl+Shift to toggle input mode)" : "")

    let submitInput = async (keyEvent: KeyboardEvent) => {
        if (keyEvent.key == "Enter" && inputValue.trim()) {
            if (isSmartMode) {
                isLoading = true;
                (await taskBreakdown(inputValue)).forEach(tasks.addTask);
                isLoading = false;
            } else {
                tasks.addTaskByTitle(inputValue);
            }
            inputValue = "";
        }
    };

    let toggleInputMode = (keyEvent: KeyboardEvent) => {
        if (keyEvent.ctrlKey && keyEvent.shiftKey) {
            keyEvent.preventDefault();
            isSmartMode = !isSmartMode;
        }
    }

    let handleKeydown = (keyEvent: KeyboardEvent) => {
        toggleInputMode(keyEvent);
        submitInput(keyEvent);
    }
</script>

<div class="new-task-input">
    <button
        class="task-item"
        class:isFocus
        class:isLoading
        on:click={() => textbox.focus()}
        on:keydown={handleKeydown}
    >
        <span class="task-item-checkbox">
            <input type="checkbox" disabled />
        </span>
        <input
            type="text"
            {placeholder}
            disabled={isLoading}
            bind:value={inputValue}
            bind:this={textbox}
            on:focus={() => isFocus = true}
            on:blur={() => isFocus = false}
            class="manual-task-input-textbox"
        />
        {#if isFocus}
            <span class="task-input-mode">{isSmartMode ? "[SMART]" : "[MANUAL]"}</span>
        {/if}
    </button>
</div>
