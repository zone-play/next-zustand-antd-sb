import { LayoutComponent } from '../components/layout.component';
import { HeaderComponent } from '../components/header.component';

interface props {
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
};

// const logoAlt = 'Tesla Logo';
// const logoWidth = 128;
// const logoHeight = 45;

const HomePage = ({ logoAlt, logoWidth, logoHeight }: props) => {
  return (
    <LayoutComponent
      headTitle='Home 首页'
      headDes=''
      headContent=''
      header={<HeaderComponent logoAlt={logoAlt} logoWidth={logoWidth} logoHeight={logoHeight} />}
      main={<>main</>}
      footer={<>尾部</>} />
  )
}

export default HomePage