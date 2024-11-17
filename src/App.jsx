import { useState } from "react";
import DataForm from "./Components/DataForm";
import DataTable from "./Components/DataTable";
import MainHeader from "./Components/MainHeader";
import { calculateInvestmentResults } from "./utils/investment";

export default function App() {
  const [results, setResults] = useState([]);

  function showResults(formData) {
    const r = calculateInvestmentResults(formData);
    setResults(r);
  }
  return (
    <>
      <MainHeader />
      <DataForm showResults={showResults} />
      <DataTable data={results} />
    </>
  );
}
