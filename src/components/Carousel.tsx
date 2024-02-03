import React from 'react';
import '../App.css'; 
import { Carousel } from 'antd';
import Civil from '../assets/civil.jpg';
import Trabalho from '../assets/Trabalho.jpg';
import Penal from '../assets/penal.jpg';
import Previdenciario from '../assets/previdenciário.jpg';

const contentStyle: React.CSSProperties = {
  height: '80vh',
  width:'100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#fff',
  textAlign: 'center',
  background: '',
};

const textContainerStyle: React.CSSProperties = {
  padding: '30px',
  width: '100%',
  position: 'absolute',  
  bottom: 0,
  zIndex: '1',
  color: 'black',
};



const Expo: React.FC = () => {



  const isScroll = window.innerWidth <= 768; 

  if (isScroll) {
    contentStyle.top = '300%'; 
  }

  return(
      <div className='carousel'style={{ textAlign: 'center',top:'100%'}}>
        <Carousel style={{ width: '100%', position: 'absolute', top:'180%' , fontFamily:'Playfair Display, serif' }} autoplay>
          <div>
            <h3 style={{...contentStyle, backgroundImage: `url(${Civil})`}}>
              <div style={textContainerStyle}>
                <p>Jurídico:
                   <br/>Normas que regem relações pessoais, contratos e propriedades. Fundamentais para a ordem social e jurídica.</p>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={{...contentStyle, backgroundImage: `url(${Penal})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
              <div style={textContainerStyle}>
                <p>Civil:
                  <br/>Disciplina crimes, aplica punições e preserva a ordem social através do sistema jurídico.</p>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={{...contentStyle, backgroundImage: `url(${Trabalho})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
              <div style={textContainerStyle}>
                <p>Trabalhista:
                  <br/>Garante direitos laborais, equidade nas relações empregatícias e condições justas de trabalho.</p>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={{...contentStyle, backgroundImage: `url(${Previdenciario})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
              <div style={textContainerStyle}>
                <p>Seguridade social:
                  <br/>Pilar essencial para amparar cidadãos em saúde, previdência e assistência.</p>
              </div>
            </h3>
          </div>
        </Carousel>
      </div>
)};

export default Expo;
