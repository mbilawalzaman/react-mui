// src/components/PDFGeneration.js
import React from "react";
import jsPDF from "jspdf";

const PDFGeneration = ({ userInfo, answers }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    console.log("props", userInfo, answers);
    if (userInfo && userInfo.name) {
      doc.text(`Name: ${userInfo.name}`, 10, 10);
      doc.text(`Surname: ${userInfo.surname || "N/A"}`, 10, 20);
      doc.text(`Email: ${userInfo.email || "N/A"}`, 10, 30);
      doc.text(`Number: ${userInfo.number || "N/A"}`, 10, 40);
    } else {
      doc.text("No user information available", 10, 10);
    }

    doc.text(`Total: ${answers.total || 0}`, 10, 50);

    doc.save("MateScoreQuestionnaire.pdf");
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default PDFGeneration;
