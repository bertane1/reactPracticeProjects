import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input, initialInvestment }) {
  const resultsData = calculateInvestmentResults(input);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(data.valueEndOfYear - (data.annualInvestment * data.year) - initialInvestment)}</td>
            <td>
              {formatter.format(
                initialInvestment + (data.annualInvestment * data.year)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
