import React from 'react';
import './homeStyles.css';
import WebcamCapture from 'react-webcam';

const Home = () => {
    const submitForm = () => {
        alert("Form submitted");
    }

    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Capture the Image</h1>
                    <form className="form">
                        <WebcamCapture />
                        <button type="submit" id="login-button" onClick={(e) => submitForm(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
