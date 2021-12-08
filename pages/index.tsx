import { LayoutComponent } from '../components/layout.component';
import { HeaderComponent } from '../components/header.component';

interface props {
  headTitle?: string;
  headDes?: string;
  headContent?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
};

// const headTitle = 'Home 首页';
// const headDes = '这是一个练手项目';
// const headContent = '这个项目使用多种技术栈实现';
// const logoAlt = 'Tesla Logo';
// const logoWidth = 128;
// const logoHeight = 45;

const HomePage = ({ headTitle, headDes, headContent, logoAlt, logoWidth, logoHeight }: props) => {

  return (
    <LayoutComponent
      headTitle={headTitle}
      headDes={headDes}
      headContent={headContent}
      header={<HeaderComponent logoAlt={logoAlt} logoWidth={logoWidth} logoHeight={logoHeight} />}
      main={<>main</>}
      footer={<>尾部</>} />
  )
}

export default HomePage