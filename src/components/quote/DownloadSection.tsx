"use client";

import React from "react";
import { UploadIcon } from "@/components/icons";

type Props = {
  quoteId: string;
};

export default function DownloadSection({ quoteId }: Props) {
  const handleDownloadPDF = async () => {
    try {
      // Dynamically import html2pdf only on client side
      const html2pdf = (await import("html2pdf.js")).default;

      // Create a temporary container for PDF content
      const pdfContent = document.createElement("div");
      pdfContent.style.width = "100%";
      pdfContent.style.padding = "20px";
      pdfContent.style.backgroundColor = "white";

      // Get all sections except the download section
      const sections = document.querySelectorAll(
        "section:not(#download-section)"
      );
      const title = document.querySelector(".text-center.mb-12");

      // Add title
      if (title) {
        const clonedTitle = title.cloneNode(true) as HTMLElement;
        pdfContent.appendChild(clonedTitle);
      }

      // Add all sections
      sections.forEach((section) => {
        const clonedSection = section.cloneNode(true) as HTMLElement;
        clonedSection.style.pageBreakInside = "avoid";
        clonedSection.style.marginBottom = "20px";

        // Find and modify function tags for PDF
        const functionTags = clonedSection.querySelectorAll(
          "[data-pdf-function-tag]"
        );

        functionTags.forEach((tag) => {
          const element = tag as HTMLElement;
          element.style.backgroundColor = "#F3F4F6";
          element.style.textAlign = "center";
          element.style.top = "0px";
          element.style.display = "inline-block";
          element.style.borderRadius = "100px";
          element.style.paddingLeft = "12px";
          element.style.paddingRight = "12px";
          element.style.color = "#4D4D4D";
        });

        const functionTags2 = clonedSection.querySelectorAll(
          "[data-pdf-function-tag-2]"
        );

        functionTags2.forEach((tag) => {
          const element = tag as HTMLElement;
          element.style.display = "flex";
          element.style.flexDirection = "column";
          element.style.justifyContent = "start";
          element.style.justifyItems = "start";
          element.style.alignItems = "start";
          element.style.alignContent = "start";
          element.style.height = "48px";
          element.style.color = "#4D4D4D";
        });

        pdfContent.appendChild(clonedSection);
      });

      // Configure PDF options
      const opt = {
        margin: [15, 15],
        filename: `견적서_${quoteId}.pdf`,
        image: { type: "jpeg", quality: 1 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          scrollY: -window.scrollY,
          windowWidth: 1024,
          onclone: function (clonedDoc: Document) {
            const content = clonedDoc.querySelector(
              "#pdf-content"
            ) as HTMLElement;
            if (content) {
              content.style.transform = "none";
              content.style.width = "100%";
            }
          },
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
      };

      // Add temporary element to body
      pdfContent.id = "pdf-content";
      document.body.appendChild(pdfContent);

      try {
        // Generate PDF
        await html2pdf().set(opt).from(pdfContent).save();
      } finally {
        // Clean up
        document.body.removeChild(pdfContent);
      }
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("PDF 생성에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <div
      id="download-section"
      className="flex flex-col sm:flex-row gap-4 sw-auto"
    >
      <button
        onClick={handleDownloadPDF}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-900 transition-colors duration-200 sm:w-[190px]"
      >
        <UploadIcon className="w-5 h-5" />
        PDF 다운로드
      </button>
    </div>
  );
}
