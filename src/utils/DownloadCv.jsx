const DownloadCv = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/cv.pdf";
        link.download = "My-CV.pdf";
        link.click();
    }

    return (
    <button
        onClick={handleDownload}
        className="bg-dark-800/50 text-dark-400 hover:bg-dark-700 hover:text-dark-200 border border-dark-700 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-300  cursor-pointer w-[145px]" 
    >
        Download CV
    </button>
    )
}

export default DownloadCv
