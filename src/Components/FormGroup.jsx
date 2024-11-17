import { useState } from "react";

export default function FormGroup({ id, label, type }) {
  const [currValue, setCurrValue] = useState("");
  return (
    <div className="text-gray-100">
      <label htmlFor={id} className="block mb-1">
        {label}
      </label>
      <input
        className="block w-full bg-transparent px-2 py-2 border border-gray-100/30 rounded focus:outline-none focus:border-gray-200"
        type={type}
        value={currValue}
        id={id}
        name={id}
        onChange={(e) => setCurrValue(e.target.value)}
      />
    </div>
  );
}
