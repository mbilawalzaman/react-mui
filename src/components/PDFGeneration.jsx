import React, { useEffect } from "react";
import jsPDF from "jspdf";

const PDFGeneration = ({ userInfo, answers }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    console.log("props", answers);
    if (userInfo && userInfo.name) {
      doc.text(`Name: ${userInfo.name}`, 10, 10);
      doc.text(`Surname: ${userInfo.surname || "N/A"}`, 10, 20);
      doc.text(`Email: ${userInfo.email || "N/A"}`, 10, 30);
      doc.text(`Number: ${userInfo.number || "N/A"}`, 10, 40);
    } else {
      doc.text("No user information available", 10, 10);
    }

    doc.text(`Total: ${answers.total || 0}`, 10, 50);

    console.log("answers", answers);

    // Include text fields in the PDF
    doc.text(`Text Field 1: ${answers.textField1 || "N/A"}`, 10, 60);
    doc.text(`Text Field 2: ${answers.textField2 || "N/A"}`, 10, 70);
    doc.text(`Text Field 3: ${answers.textField3 || "N/A"}`, 10, 80);
    doc.text(`Text Field 4: ${answers.textField4 || "N/A"}`, 10, 90);

    doc.save("MateScoreQuestionnaire.pdf");
  };

  useEffect(() => {
    console.log("Updated answers:", answers);
  }, [answers]);

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default PDFGeneration;
