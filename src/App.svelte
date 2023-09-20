<script lang="ts">
    import Layout from './components/Layout/Layout.svelte';
    import Logo from './components/Logo/Logo.svelte';
    import ManualTaskInput from './components/ManualTaskInput/ManualTaskInput.svelte';
    import TaskList from './components/TaskList/TaskList.svelte';
    import TaskSidePane from './components/TaskSidePane/TaskSidePane.svelte';
    import { guiOptions } from './stores/GUIOptionsStore';
    import { finishedTasks, unfinishedTasks } from './stores/TaskStore';

</script>

<Layout>
  <div id="main-panel" style={`width: ${$guiOptions.sidePane.isOpen ? "55%" : "95%" }`}>
    <Logo/>
    <ManualTaskInput/>
    <TaskList category="In-Progress" taskList={$unfinishedTasks} />
    <TaskList category="Finished" taskList={$finishedTasks} />
  </div>
  <TaskSidePane/>
</Layout>