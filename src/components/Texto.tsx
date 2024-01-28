import { ArrowRightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const Texto: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        const contatoSection = document.getElementById('contato');
        if (contatoSection) {
            window.scrollTo({
                top: contatoSection.offsetTop,
                behavior: 'smooth', 
            });
        }
    };

    return (
        <>
            <div
                id='initial'
                className={`texto ${isHovered ? 'hovered' : ''}`}
                style={{ top: '55%', position: 'absolute', left: '15%', top: '80%', fontFamily: 'Playfair Display, serif' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <h1 style={{ fontWeight: 'bold'}}>
                    Entre em Contato
                    <ArrowRightOutlined
                        id='icon'
                        style={{
                            position: 'absolute',
                            top: '55%',
                            fontSize: '35px',
                            left: '45%',
                            transition: 'transform 0.3s ease-in-out',
                            transform: isHovered ? 'translateX(10px)' : 'translateX(0)',
                        }}
                        onClick={handleClick} 
                    />
                </h1>
            </div>
        </>
    );
};

export default Texto;
