import React from "react";
import "./styles/emailComponent.css";
import { useNavigate } from 'react-router-dom';

const EmailComponent = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        
        navigate('/contact');
    };
	return (
		<React.Fragment>
			<div onClick={handleClick} class="letter-image">
                <div className="text"> 
                    <h2>Let's Collaborate!</h2>
                </div>
                <div class="animated-mail">
                    <div class="back-fold"></div>
                    <div class="letter">
                        <div class="letter-border"></div>
                        <div class="letter-title"></div>
                        <div class="letter-context"></div>
                        <div class="letter-stamp">
                            <div class="letter-stamp-inner"></div>
                        </div>
                    </div>
                    <div class="top-fold"></div>
                    <div class="body"></div>
                    <div class="left-fold"></div>
                </div>
                <div class="shadow"></div>
            </div>
		</React.Fragment>
	);
};


export default EmailComponent;


