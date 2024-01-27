import React from 'react';
import { Card, Col, Row } from 'antd';
import { CheckOutlined } from '@ant-design/icons';


const About: React.FC = () => (
  <div className='about'>
    <Row gutter={36} className='card-row'>
      <Col span={7}>
        <Card
          className="about-card"
          style={{ fontFamily: 'Playfair Display, serif' }}
          title={
            <span>
              <CheckOutlined />
            </span>
          }
          bordered={false}
        >
          Oferecemos serviços jurídicos especializados, desde consultoria até representação em tribunais, garantindo soluções eficazes para diversas questões legais.
        </Card>
      </Col>
      <Col span={7}>
        <Card
          className="about-card"
          style={{ fontFamily: 'Playfair Display, serif' }}
          title={
            <span>
              <CheckOutlined />
            </span>
          }
          bordered={false}
        >
          Buscamos superar expectativas, fornecendo serviços adaptados às necessidades dos clientes. Construímos relações sólidas, oferecendo soluções estratégicas para alcançar metas legais e objetivos específicos.
        </Card>
      </Col>
      <Col span={7}>
        <Card
          className="about-card"
          style={{ fontFamily: 'Playfair Display, serif' }}
          title={
            <span>
              <CheckOutlined />
            </span>
          }
          bordered={false}
        >
          Guiados por ética, integridade e compromisso com a excelência, priorizamos a justiça, equidade e transparência. Valorizamos a comunicação aberta, responsabilidade e a paixão pelo direito em todos os aspectos de nosso trabalho.
        </Card>
      </Col>
    </Row>
  </div>
);

export default About;
