import React, { useRef, useState } from 'react';

const DisplayGameCode = ({ gameID }) => {
    const [copySuccess, setCopySuccess] = useState(false);
    const textInputRef = useRef(null);

    const copyToClipboard = () => {
        textInputRef.current.select();
        document.execCommand("copy");
        setCopySuccess(true);
        setTimeout(() => {
            setCopySuccess(false);
        }, 2000); // Reset copy success message after 2 seconds
    }

    return (
        <div className="flex justify-center my-3">
            <div className="w-full max-w-md">
                <h4 className="text-center text-lg font-bold mb-3">Send this Code to Your Friends for Them to Join</h4>
                <div className="flex items-center mb-3">
                    <input
                        type="text"
                        ref={textInputRef}
                        value={gameID}
                        readOnly
                        className="flex-1 px-4 py-2 bg-gray-200 rounded-l-lg focus:outline-none focus:bg-white"
                    />
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg focus:outline-none"
                        onClick={copyToClipboard}
                        type="button"
                    >
                        Copy
                    </button>
                </div>
                {copySuccess && (
                    <div className="text-green-600 text-sm text-center mb-3">
                        Successfully Copied Game Code
                    </div>
                )}
            </div>
        </div>
    )
}

export default DisplayGameCode;
