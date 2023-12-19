import React, { useState } from "react";
import ReportFill from "./ReportFill";

const BussinessSeveralModal = () => {
  const [rowCount, setRowCount] = useState(1);

  const addRow = () => {
    setRowCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="space-y-10">
      {[...Array(rowCount)].map((_, index) => (
        <ReportFill key={index} />
      ))}
      <button className="text-[#0089FF]" onClick={addRow}>
        + Добавить строку
      </button>
    </div>
  );
};

export default BussinessSeveralModal;
