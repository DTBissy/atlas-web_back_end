export default function getBudgetObject(income = 400, gdp = 700, capita = 900) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
