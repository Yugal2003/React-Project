import React, { useState } from 'react'; // usestate use hear

import './FirstComponent.css' // attach css hear

function FirstComponent(props){

    let [title,settitle] = useState(props.Title);  // change title using usestate

    const btn1 = () =>{                            // btn to change title
        settitle("Changing Name...");
    }

    let [fee,setfee] = useState(props.Amount);     // change fee using usestate

    const btn2 = () =>{                            // btn to change fee
        setfee("500");
    }
    return (
        <div className='main'>
            <h2 className='no'>{ props.No }.</h2>
            <h2 className='h2'>{ title}</h2>
            <h3 className='h3'> { fee } </h3>
            <button className='btn_title' onClick={btn1}>Change Title</button>
            <button className='btn_fee' onClick={btn2}>Change Fee</button>
        </div>
    );
}

export default FirstComponent;