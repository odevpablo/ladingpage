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
};



const Expo: React.FC = () => {



  const isScroll = window.innerWidth <= 768; 

  if (isScroll) {
    contentStyle.top = '300%'; 
  }

  return(
      <div className='carousel'style={{ textAlign: 'center', position:'relative',top:'9%'}}>
        <Carousel style={{ width: '100%', position: 'absolute', top:'180%' , fontFamily:'Playfair Display, serif' }} autoplay>
          <div>
            <h3 style={{...contentStyle, backgroundImage: `url(${Civil})`}}>
              <div style={textContainerStyle}>
                <p> Civil</p>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={{...contentStyle, backgroundImage: `url(${Penal})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
              <div style={textContainerStyle}>
                <p>Penal</p>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={{...contentStyle, backgroundImage: `url(${Trabalho})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
              <div style={textContainerStyle}>
                <p>Trabalhista</p>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={{...contentStyle, backgroundImage: `url(${Previdenciario})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
              <div style={textContainerStyle}>
                <p>Seguridade Social</p>
              </div>
            </h3>
          </div>
        </Carousel>
      </div>
)};

export default Expo;
