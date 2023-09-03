export default (content) => {
  const data = content.split('\n').slice(1);
  console.log(`Количество рядов: ${data.length}`);

  const rows = data.map((row) => row
  .split('|')
  .filter((row)=>row))
  .map((array) => array
    .map((element) => element.trim())
  );

  const strength = rows.map((row) => Number(row[1]));
  const strongestIndex = strength.indexOf(Math.max(...strength));
  console.log(strongestIndex);
  const strenghtWithoutStrongest = strength.slice()
  strenghtWithoutStrongest[strongestIndex]=0
  const secondStrongestIndex = strength.indexOf(Math.max(...strenghtWithoutStrongest));
  console.log(strenghtWithoutStrongest);
  console.log(secondStrongestIndex);
};