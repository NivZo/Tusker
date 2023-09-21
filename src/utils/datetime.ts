export let formatDate = (date: number): string => {
    const asDate = new Date(date);
    const month = String(asDate.getMonth() + 1).padStart(2, '0');
    const day = String(asDate.getDate()).padStart(2, '0');
    return `${day} / ${month} / ${asDate.getFullYear()}`;
}