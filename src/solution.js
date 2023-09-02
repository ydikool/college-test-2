export default (content) => {
  const rows = content.split('\n').slice(1);
  console.log(`Колличество рядов существ: ${rows.length}`);
};