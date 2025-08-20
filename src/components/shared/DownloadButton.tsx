"use client";

interface DownloadButtonProps {
  filePath: string;
  fileName: string;
  buttonText: string;
  className?: string;
}

export default function DownloadButton({
  filePath,
  fileName,
  buttonText,
  className = "",
}: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`flex w-auto bg-transparent border-2 border-white hover:bg-white hover:text-blue-1000 text-white text-center px-6 py-2 rounded-lg font-pretendard font-medium transition-all duration-300 text-base break-keep ${className}`}
    >
      {buttonText}
    </button>
  );
}
