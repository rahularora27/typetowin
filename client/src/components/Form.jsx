import React, { useState, useRef, useEffect } from 'react';
import socket from '../config/socketConfig';

const Form = ({ isOpen, isOver, gameID }) => {
    const [userInput, setUserInput] = useState("");
    const textInput = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            textInput.current.focus();
        }
    }, [isOpen])

    const resetForm = () => {
        setUserInput("");
    }

    const onChange = e => {
        let value = e.target.value;
        let lastChar = value.charAt(value.length - 1);
        if (lastChar === " ") {
            socket.emit('userInput', { userInput, gameID });
            resetForm();
        }
        else
            setUserInput(e.target.value);
    }

    return (
        <div className="flex justify-center my-3">
            <div className="w-1/3"></div>
            <div className="w-1/3">
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            readOnly={isOpen || isOver}
                            onChange={onChange}
                            value={userInput}
                            className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:bg-blue-200"
                            ref={textInput}
                        />
                    </div>
                </form>
            </div>
            <div className="w-1/3"></div>
        </div>
    )
}

export default Form;
