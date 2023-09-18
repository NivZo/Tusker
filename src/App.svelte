<script>
    import Layout from './components/Layout/Layout.svelte';
    import Logo from './components/Logo/Logo.svelte';
    import ManualTaskInput from './components/ManualTaskInput/ManualTaskInput.svelte';
    import TaskList from './components/TaskList/TaskList.svelte';
    import { finishedTasks, unfinishedTasks } from './stores/TaskStore';
</script>

<Layout>
  <Logo/>
  <ManualTaskInput/>
  <TaskList category="In-Progress" taskList={$unfinishedTasks} />
  <TaskList category="Finished" taskList={$finishedTasks}/>
</Layout>