import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

import { WindowControls } from "@components";
import WindowWrapper from "@hoc/WindowWrapper";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <div className="h-[calc(100vh-200px)] overflow-y-scroll scroll-smooth">
        <Document file="files/resume.pdf">
          {Array.from(new Array(2), (_, index) => (
            <Page
              key={index}
              pageNumber={index + 1}
              renderTextLayer
              renderAnnotationLayer
            />
          ))}{" "}
        </Document>{" "}
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
