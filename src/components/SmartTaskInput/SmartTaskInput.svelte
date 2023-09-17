<script lang="ts">
    import "./SmartTaskInput.scss";
    import { tasks } from "../../stores/TaskStore";
    import { taskBreakdown } from "../../utils/gpt";

    let initialPrompt = "Deploy the services: TaskDispatcher, MergeLogic, UnionJob and AutoMerge to CAN, and then deploy to them PRD. Validate the logs for after each service deployment. write a summary of issues found for each of the deployed services.";
    let prompt: string = initialPrompt;

    let breakdown = async () =>  {
        let result = (await taskBreakdown(prompt));
        result.forEach(tasks.addTask);
        clearInput();
    };

    let clearInput = () => {
        prompt = initialPrompt;
    };
</script>

<div class="smart-task-input">
    <textarea bind:value={prompt}/>
    <button on:click={breakdown}>Breakdown</button>
</div>