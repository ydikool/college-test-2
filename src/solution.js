export default (content) => {
  const data = content.split('\n').slice(1);
  console.log(`Количество рядов: ${data.length}`);

  const rows = data.map((row) => row
  .split('|')
  .filter((row)=>row))
  .map((array) => array
    .map((element) => element.trim())
  );

  const creatures = rows.map((row) => row[0]);
  const prices = rows.map((row) => row[6]);

  const strength = rows.map((row) => Number(row[1]));
  const strongestIndex = strength.indexOf(Math.max(...strength));
  const strenghtWithoutStrongest = strength.slice()
  strenghtWithoutStrongest[strongestIndex]=0
  const secondStrongestIndex = strength.indexOf(Math.max(...strenghtWithoutStrongest));

  console.log(`цена за 10 сильнейших созданий: ${prices[strongestIndex] * 10}`);
  console.log(`цена за 20 вторых по силе созданий: ${prices[secondStrongestIndex] * 20}`);
};