import React, { useState } from 'react';

const Glass = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section className="section-balala">
            <div className="glassmorphism-container" onMouseMove={handleMouseMove}>
                <div className="glassmorphism-div" />
                <div className="color-overlay" style={{
                    left: mousePosition.x + 'px',
                    top: mousePosition.y + 'px',
                }} />
            </div>
        </section>
    );
};

export default Glass;
