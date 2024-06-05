import React, { useRef, useState } from 'react';

const DisplayGameCode = ({ gameID }) => {
    const [copySuccess, setCopySuccess] = useState(false);
    const textInputRef = useRef(null);

    const copyToClipboard = () => {
        textInputRef.current.select();
        document.execCommand("copy");
        setCopySuccess(true);
    }

    return (
        <div className="flex justify-center my-3">
            <div className="w-1/3"></div>
            <div className="w-1/3">
                <h4 className="text-center">Send this Code to Your Friends for them to join</h4>
                <div className="flex mb-3">
                    <input
                        type="text"
                        ref={textInputRef}
                        value={gameID}
                        readOnly
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                    />
                    <button
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none"
                        onClick={copyToClipboard}
                        type="button"
                    >
                        Copy Game Code
                    </button>
                </div>
                {copySuccess && (
                    <div className="alert alert-success" role="alert">
                        Successfully Copied Game Code
                    </div>
                )}
            </div>
            <div className="w-1/3"></div>
        </div>
    )
}

export default DisplayGameCode;