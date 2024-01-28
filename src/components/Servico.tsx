import React from 'react';
import { Card } from 'antd';
import Advogado1 from '../assets/pf1.png'; 
import Advogado2 from '../assets/pf2.png'; 
import Oab from '../assets/oab-logo.gif';
const { Meta } = Card;

const Servico: React.FC = () => {
    return (
        <div className='servico'>
            <h2 style={{ fontFamily: 'Playfair Display, serif' }}>Equipe de Advogados</h2>
            <div className='oab'>
            <img src={Oab} id='oab' style={{width:'150px', height:'60px', position:'absolute', top:'90%', left:'80%'}}/>
            </div>
            <div className='advogados' style={{ position:'absolute'}}>
                <Card
                    hoverable
                    className='card1'
                    style={{ width: '240px', margin: '10px', borderRadius:'2px', fontFamily:'Playfair Display, serif'  }}
                    cover={<img alt="Ricardo Alves" src={Advogado1} style={{borderRadius:'2px' }} />}
                >
                    <Meta title="Ricardo Alves" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    className='card2'
                    style={{ width: 240, margin: '10px', borderRadius:'2px', fontFamily:'Playfair Display, serif'  }}
                    cover={<img alt="Raphael Neto" style={{ height: '298.52px', borderRadius:'2px'}} src={Advogado2} />}
                >
                    <Meta title="Raphael Neto" description="www.instagram.com" />
                </Card>
                  
            </div>
        
        </div>
    );
};

export default Servico;
