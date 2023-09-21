<script lang="ts">
    import "./DatePicker.scss";
    import type { ChangeEventHandler } from "svelte/elements";

    export let onChange: ChangeEventHandler<HTMLInputElement>;
</script>
 
  <!-- <input type="date" 
    use:nativeDatePicker="{{ date: null, options: { minDate: new Date(2023, 0, 1) } }}" 
    on:change="{onChangeDate}" /> -->
<input class="datepicker" type="date" on:change={onChange}/>