import { formatter } from "../utils/investment";
import "./DataTable.css";

const tableHeads = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

const dataKeysOrdered = [
  "year",
  "valueEndOfYear",
  "interest",
  "totalInterest",
  "annualInvestment",
];

export default function DataTable({ data }) {
  if (data.length === 0) {
    return (
      <div className="text-center text-gray-200/80">
        <h2 className="font-semibold">No Investments to show</h2>
        <p>Please fill the form above to get investments</p>
      </div>
    );
  }
  return (
    <table className="data-table min-w-max mx-auto mb-8">
      <thead className="text-accent/80">
        <tr>
          {tableHeads.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="text-white/80">
        {data.map((row) => (
          <tr key={row.year}>
            {dataKeysOrdered.map((key, i) => (
              <td key={i + key}>
                {key === "year" ? row[key] : formatter.format(row[key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
