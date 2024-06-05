import React, { useState, useRef, useEffect } from 'react';
import socket from '../config/socketConfig';

const Form = ({ isOpen, isOver, gameID }) => {
    const [userInput, setUserInput] = useState("");
    const textInput = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            textInput.current.focus();
        }
    }, [isOpen]);

    const resetForm = () => {
        setUserInput("");
    };

    const onChange = e => {
        let value = e.target.value;
        let lastChar = value.charAt(value.length - 1);
        if (lastChar === " ") {
            socket.emit('userInput', { userInput, gameID });
            resetForm();
        } else {
            setUserInput(value);
        }
    };

    const onKeyPress = e => {
        if (e.key === "Enter") {
            e.preventDefault();
            // Do nothing
            console.log("Enter key press prevented");
        }
    };

    return (
        <div className="flex justify-center my-3">
            <div className="w-1/3"></div>
            <div className="w-1/3">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <input
                            type="text"
                            readOnly={isOpen || isOver}
                            onChange={onChange}
                            onKeyPress={onKeyPress}
                            value={userInput}
                            className="w-full text-xl font-semibold px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:bg-gray-300"
                            ref={textInput}
                        />
                    </div>
                </form>
            </div>
            <div className="w-1/3"></div>
        </div>
    );
}

export default Form;
