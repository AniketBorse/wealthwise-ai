function analyzeExpenses(expenses) {
  let total = Object.values(expenses).reduce((a, b) => a + b, 0);

  let highest = "";
  let max = 0;
  let insights = [];

  for (let category in expenses) {
    let percent = (expenses[category] / total) * 100;

    if (percent > max) {
      max = percent;
      highest = category;
    }

    if (percent > 40) {
      insights.push(`Overspending detected in ${category}`);
    }
  }

  let score = 10 - Math.floor(max / 10);

  return {
    highestSpending: highest,
    insights: insights,
    score: `${score}/10`
  };
}