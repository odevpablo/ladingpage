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

    return (
        <>
            <div
                className={`texto ${isHovered ? 'hovered' : ''}`}
                style={{ top: '55%', position: 'absolute', left: '15%',  fontFamily: 'Playfair Display, serif' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <h1 style={{fontWeight:'bold',transform: 'translate(-0%, 150%)'}}>
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
                        // lembrar de fazer que o click no icone me leve pra parte do site em especifico 
                    />
                </h1>
            </div>
        </>
    );
};

export default Texto;
