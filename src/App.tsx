import React from 'react';
import { Layout, Flex } from 'antd';
import './App.css'; 

import Logo from './assets/logorpadv.png';
import Backgroung from './assets/background.jpg';
import Servico from './components/Servico';
import FormMail from './components/Form';
import Map from './components/Localizacao';
import About from './components/Referencia';
import { DoubleLeftOutlined } from '@ant-design/icons';
import Expo from './components/Carousel';

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
  height:'250px',
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
    contentStyle.minHeight = '660vh'; 
  }

  return (
    <>
      <Flex gap="middle" wrap="wrap">
        <Layout className='layout' style={layoutStyle}>
          <Layout>
            <Content id='content' style={contentStyle}>
              <img id='background' src={Backgroung} style={{ width: '100vw', height: '100vh', position: 'relative' }} />
              <div className='logo'>
                <img id='logo' src={Logo} style={{ width: '200px', height: '200px', left: '80%', top: '10%'}} />
              </div>
              <div className='slideinfo' style={{ position: 'absolute', top: '95%',left: '50%',transform: 'translate(-50%, -50%)',}}>
                <DoubleLeftOutlined style={{fontSize:'60px', transform: 'rotate(269deg)'}}/></div>
              <div><Servico /></div>
              <About />
              <div className='exposicao' style={{top:'250px', position:'relative'}}>
               <Expo/>
               </div>
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
