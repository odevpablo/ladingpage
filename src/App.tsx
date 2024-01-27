import React from 'react';
import { Layout, Flex, Form } from 'antd';
import './App.css'; 

import Logo from './assets/logorpadv.png';
import Backgroung from './assets/background.jpg';
import Texto from './components/Texto';
import Servico from './components/Servico';
import FormMail from './components/Form';
import Expo from './components/Carousel';
import Map from './components/Localizacao';
import About from './components/Referencia';

const { Footer, Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: '475vh',
  lineHeight: '100vh',
  color: '#fff',
  backgroundColor: '#ffffff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  height:'200px',
  color: '#fff',
  backgroundColor: '#393E46',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100vw',
  maxWidth: '100vw',
};

const App: React.FC = () => {
  
  const isSmallScreen = window.innerWidth <= 768; 
  
  if (isSmallScreen) {
    contentStyle.minHeight = '700vh'; 
  }

  return (
    <>
      <Flex gap="middle" wrap="wrap">
        <Layout className='layout' style={layoutStyle}>
          <Layout>
            <Content id='content' style={contentStyle}>
              <img id='background' src={Backgroung} style={{ width: '100vw', height: '100vh', position: 'relative' }} />
              <div>
                <img id='logo' src={Logo} style={{ width: '200px', height: '200px', left: '95%', top: '10%', transform: 'translate(-122%, 30%)' }} />
              </div>
              <h4 id='titlecarousel' style={{ fontFamily: 'Playfair Display, serif', position:'absolute',top:'205%', marginBottom:'0px',textAlign:'center' }}>Áreas de Atuação</h4>
              <div><Texto /></div>
              <div><Servico /></div>
              <About />
              <Expo />
              <FormMail />
              <Map />
            </Content>
            <Footer style={footerStyle}></Footer>
          </Layout>
        </Layout>
      </Flex>
    </>
  );
};

export default App;
