import { Media } from '../../media';
import { HeaderDeskComponent } from './header.desk';

interface props {
    logoAlt?: string;
    logoWidth?: number;
    logoHeight?: number;
}

export const HeaderComponent = ({ logoAlt, logoWidth, logoHeight }: props) => {
    return (
        <>
            <Media greaterThanOrEqual="lg">
                <HeaderDeskComponent logoAlt={logoAlt} logoWidth={logoWidth} logoHeight={logoHeight} />
            </Media>
            <Media at="md">
                <HeaderDeskComponent logoAlt={logoAlt} logoWidth={logoWidth} logoHeight={logoHeight} />
            </Media>
            <Media at="sm">

            </Media>
        </>
    )
}