export default (content) => {
  // step 1
  const data = content.split('\n').slice(1);
  console.log(`Количество рядов: ${data.length}`);

  // step 2
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

  // step 3
  const unitsInDivision = rows.map((row) => row[3]);
  const averageWeight = rows.map((row) => Number(row[5]));
  const fattestUnitIndex = averageWeight.indexOf(Math.max(...averageWeight));
  const thinnestUnitIndex = averageWeight.indexOf(Math.min(...averageWeight));

  console.log(`цена за отряд самых толстых: ${prices[fattestUnitIndex] * unitsInDivision[fattestUnitIndex]}`);
  console.log(`цена за отряд самых тонких: ${prices[thinnestUnitIndex] * unitsInDivision[thinnestUnitIndex]}`);

  // step 4
  const mapStrenthToValue = strength.map((strength, index) => Math.floor(prices[index] / strength));
  const worstByPrice = mapStrenthToValue.indexOf(Math.max(...mapStrenthToValue));
  const bestByPrice = mapStrenthToValue.indexOf(Math.min(...mapStrenthToValue));
  console.log(`Самый выгодный юнит: ${creatures[bestByPrice]}`);
  console.log(`Самый невыгодный юнит: ${creatures[worstByPrice]}`);
};