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
        // Encontrar o elemento com a ID 'contato' e rolar até ele
        const contatoSection = document.getElementById('contato');
        if (contatoSection) {
            window.scrollTo({
                top: contatoSection.offsetTop,
                behavior: 'smooth', // Adiciona uma animação de rolar suave
            });
        }
    };

    return (
        <>
            <div
                className={`texto ${isHovered ? 'hovered' : ''}`}
                style={{ top: '55%', position: 'absolute', left: '15%', fontFamily: 'Playfair Display, serif' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <h1 style={{ fontWeight: 'bold', transform: 'translate(-0%, 150%)' }}>
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
                        onClick={handleClick} // Adiciona a função de clique
                    />
                </h1>
            </div>
        </>
    );
};

export default Texto;
