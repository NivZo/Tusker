<script lang="ts">
    import Layout from './components/Layout/Layout.svelte';
    import Logo from './components/Logo/Logo.svelte';
    import ManualTaskInput from './components/ManualTaskInput/ManualTaskInput.svelte';
    import TaskList from './components/TaskList/TaskList.svelte';
    import TaskSidePane from './components/TaskSidePane/TaskSidePane.svelte';
    import { finishedTasks, unfinishedTasks } from './stores/TaskStore';
    import type { TaskSidePaneCustomEventDetails } from './types/Task';
    import type { Nullable } from './types/UtilTypes';

    let showSidePane: boolean = false;
    let selectedTaskId: Nullable<number>;

    let handleToggleSidePane = (event: CustomEvent<TaskSidePaneCustomEventDetails>) => {
      if (showSidePane && selectedTaskId == event.detail.taskId) {
        showSidePane = false;
        selectedTaskId = null;
      } else {
        selectedTaskId = event.detail.taskId;
        showSidePane = true;
      }
    }
</script>

<Layout>
  <div id="main-panel" style={`width: ${showSidePane ? "55%" : "95%" }`}>
    <Logo/>
    <ManualTaskInput/>
    <TaskList category="In-Progress" taskList={$unfinishedTasks} on:togglesidepane={handleToggleSidePane} />
    <TaskList category="Finished" taskList={$finishedTasks} on:togglesidepane={handleToggleSidePane} />
  </div>
  <TaskSidePane bind:isVisible={showSidePane} taskId={selectedTaskId} />
</Layout>