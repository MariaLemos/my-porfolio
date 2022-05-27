import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import { MyDocument } from ".";
import { AppContextType } from "AppContext";

const generatePDFDocument = async (context: AppContextType) => {
  const blob = await pdf(<MyDocument context={context} />).toBlob();

  saveAs(blob, "Resume-Maria-Lemos");
};

export default generatePDFDocument;
