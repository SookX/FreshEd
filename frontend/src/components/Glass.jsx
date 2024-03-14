import React, { useState, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Glass = ({ children, className }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".glassmorphism-container"), {
            max: 25,
            speed: 400,
            easing: "cubic-bezier(.03,.05,.05,.05)",
            perspective: 500,
            transition: true
        });
    }, []);

    return (
            <div className="glassmorphism-container" onMouseMove={handleMouseMove}>
                <div className="glassmorphism-div" >
                { children }
                    <div className="color-overlay" style={{
                        left: mousePosition.x + 'px',
                        top: mousePosition.y + 'px',
                    }} />
                    
                </div>
            </div>
    );
};

export default Glass;
