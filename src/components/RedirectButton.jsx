import React from "react";

const RedirectButton = () => {
  
    const handleClick = () => {
        window.location.href = "https://calendly.com/kevcook11/repair-service-appointments";
    }

    return (
        <button id="myButton" onClick={handleClick}>Schedule Appointment</button>
    );
}

export default RedirectButton;
