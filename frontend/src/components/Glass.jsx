import React, { useState, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Glass = () => {
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
        <section className="section-balala">
            <div className="glassmorphism-container" onMouseMove={handleMouseMove}>
                <div className="glassmorphism-div" >
                    <h1>Hello</h1>
                    <div className="color-overlay" style={{
                        left: mousePosition.x + 'px',
                        top: mousePosition.y + 'px',
                    }} />

                </div>
            </div>
        </section >
    );
};

export default Glass;
