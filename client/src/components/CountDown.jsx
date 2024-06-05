import React, {useState,useEffect} from 'react';
import socket from '../config/socketConfig';

const CountDown = props =>{
    const [timer,setTimer] = useState({countDown : "",msg : ""});
    useEffect(()=>{
        socket.on('timer',(data)=>{
            setTimer(data);
        });
        socket.on('done',()=>{
            socket.removeListener('timer');
        });
    },[]);
    const {countDown,msg} = timer;
    return(
        <>
        <div className="text-center mt-6">
          <h1 className="text-4xl font-bold">{countDown}</h1>
          <h3>{msg}</h3>
        </div>
        </>
    )
}

export default CountDown;