import React, { useState } from "react";

const MainComponent = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [xlsxFile, setXlsxFile] = useState(null);

    // Handle file selection
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Handle file upload
    const handleUpload = async () => {
        if (!file) return;
    
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);
    
        try {
            const response = await fetch("https://d651-14-143-239-50.ngrok-free.app/upload_csv", {
                method: "POST",
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error("Failed to upload file.");
            }
    
            const blob = await response.blob();
            setXlsxFile(blob);
        } catch (error) {
            console.error("Upload failed:", error);
        } finally {
            setLoading(false);
        }
    };
    
    // **Ensure Proper Download on Windows**
    const handleDownload = () => {
        if (!xlsxFile) return;
    
        const url = window.URL.createObjectURL(xlsxFile);
        const a = document.createElement("a");
        a.href = url;
        a.download = "output.xlsx"; // Ensure correct file extension
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen text-white bg-gray-900">
            {/* Content Box */}
            <div className="p-6 text-center bg-gray-800 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-semibold">Ticket Dumps File Upload</h1>
                <p className="mt-2 text-gray-400">Upload your ticket dumps CSV/XLSX file for processing</p>

                {/* File Input */}
                <input
                    type="file"
                    accept=".csv, .xlsx"
                    className="w-full px-3 py-2 mt-4 text-white bg-gray-700 border border-gray-600 rounded-md"
                    onChange={handleFileChange}
                />

                {/* Upload Button */}
                <button
                    className={`mt-4 w-full px-4 py-2 rounded-md text-white ${
                        file ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-500 cursor-not-allowed"
                    }`}
                    onClick={handleUpload}
                    disabled={!file || loading}
                >
                    {loading ? "Uploading..." : "Upload File"}
                </button>

                {/* Loading Indicator */}
                {loading && <p className="mt-4 text-orange-400">⏳ Processing...</p>}

                {/* Download Button */}
                {xlsxFile && (
                    <button
                        className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md hover:bg-green-600"
                        onClick={handleDownload}
                    >
                        Download Processed XLSX
                    </button>
                )}
            </div>
        </div>
    );
};

export default MainComponent;
