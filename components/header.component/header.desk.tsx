import { Row, Col } from 'antd';
import { LogoComponent } from '../logo.component';

interface props {
    logoAlt?: string;
    logoWidth?: number;
    logoHeight?: number;
}

export const HeaderDeskComponent = ({ logoAlt, logoWidth, logoHeight }: props) => {
    return (
        <>
            <Row>
                <Col span={4}><LogoComponent logoAlt={logoAlt} logoWidth={logoWidth} logoHeight={logoHeight} /></Col>
                <Col span={16}>menu</Col>
                <Col span={4}>buttonGroup</Col>
            </Row>
            <Row>
                <Col span={24}>sub menu</Col>
            </Row>
            <Row>
                <Col span={24}>search</Col>
            </Row>
        </>
    )
}