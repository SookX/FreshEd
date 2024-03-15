import React, { useState, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Glass = ({ children, classes = '' }) => {
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
            max: 5,
            speed: 60,
            easing: "cubic-bezier(.03,.05,.05,.05)",
            perspective: 800,
            transition: true
        });
    }, []);

    return (
        <div className={`glassmorphism-container ${classes}`} onMouseMove={handleMouseMove}>
            <div className={`glassmorphism-div`}>
                {children}

                <div className="color-overlay" style={{
                    left: mousePosition.x + 'px',
                    top: mousePosition.y + 'px',
                }} />
            </div>
        </div>
    );
};

export default Glass;


// green
// purple