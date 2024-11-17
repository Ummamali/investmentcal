import FormGroup from "./FormGroup";
import "./DataForm.css";
import { useState } from "react";
import { getError } from "../utils/formValidator";

export default function DataForm({ showResults }) {
  const [errMsg, setErrMsg] = useState(null);
  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    // converting the form data into an object for showing results
    const formDataObj = {};
    for (const [key, value] of formData.entries()) {
      formDataObj[key] = parseFloat(value);
    }
    const validateErr = getError(formDataObj);
    if (validateErr === null) {
      // its valid
      showResults(formDataObj);
      setErrMsg(null);
    } else {
      // invalid
      setErrMsg(validateErr);
    }
  }
  return (
    <div className="data-form max-w-2xl mx-auto rounded my-16 p-10">
      {errMsg && (
        <p className="text-center text-red-400 bg-black py-2 mb-2">{errMsg}</p>
      )}
      <form className="grid grid-cols-2 gap-6" onSubmit={submitHandler}>
        <FormGroup
          label="Initial Investment"
          id="initialInvestment"
          type="number"
        />
        <FormGroup
          label="Annual Investment"
          id="annualInvestment"
          type="number"
        />
        <FormGroup label="Expected Return" id="expectedReturn" type="number" />
        <FormGroup label="Duration" id="duration" type="number" />
        <input type="submit" value="Submit" className="hidden" />
      </form>
    </div>
  );
}
