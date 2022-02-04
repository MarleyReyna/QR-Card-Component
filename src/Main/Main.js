import React from 'react';
import './Main.scss';
import qr from './image-qr-code.png'

const Main = () => {
    return (
        <main>
            <div className='card-component'>
                <img src={qr} alt='qr-code' aria-hidden='true'/>
                <h1>
                    Improve your front-end 
                    skills by building projects
                </h1>
                <p>
                    Scan the QR code to visit 
                    Frontend Mentor and take 
                    your coding skills to the 
                    next level
                </p>
            </div>
        </main>
    );
}
 
export default Main;