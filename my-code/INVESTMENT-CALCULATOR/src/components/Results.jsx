import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment = resultsData[0].valueEndOfYear
    - resultsData[0].interest
    - resultsData[0].annualInvestment;

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
        {resultsData.map((yearData) => {
          const {
            year,
            interest,
            valueEndOfYear,
            annualInvestment,
          } = yearData;

          const totalInterest = valueEndOfYear - annualInvestment * year - initialInvestment;
          const totalAmountInvested = valueEndOfYear - totalInterest;

          return (
            <tr key={year}>
              <th>{year}</th>
              <th>{formatter.format(valueEndOfYear)}</th>
              <th>{formatter.format(interest)}</th>
              <th>{formatter.format(totalInterest)}</th>
              <th>{formatter.format(totalAmountInvested)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
