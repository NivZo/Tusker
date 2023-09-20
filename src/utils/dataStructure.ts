export let uniqueArray = <T>(array: T[]): T[] =>
    array.filter((val, idx) => array.indexOf(val) == idx);