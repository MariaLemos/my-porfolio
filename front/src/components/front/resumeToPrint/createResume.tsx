import { jsPDF } from "jspdf";
import { font } from "assets/font";

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF("portrait", "px");

export function createResume(document: HTMLElement | string | null) {
  if (!document) {
    return;
  }
  doc.setTextColor(150);
  doc.addFileToVFS("Cabin-Italic-VariableFont_wdth,wght-italic.ttf", font);
  doc.addFont(
    "Cabin-Italic-VariableFont_wdth,wght-italic.ttf",
    "Cabin",
    "italic"
  );
  doc.html(document, {
    callback: function (doc) {
      doc.setFont("Cabin", "italic");

      doc.save("maria-lemos-curriculo.pdf");
    },
    x: 0,
    y: 0,
    width: 400,
    windowWidth: 700,
    margin: 0,

    html2canvas: {
      letterRendering: true,
    },
  });
}
