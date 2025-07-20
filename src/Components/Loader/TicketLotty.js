import React from 'react'
import animationData from "../Loader/Ticket.json";
import Lottie from "react-lottie";

const TicketLotty = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <>
            <div style={{ display: "inline-block" }}>
                <Lottie options={defaultOptions} height={75} width={75} />
            </div>
        </>
    )
}

export default TicketLotty
