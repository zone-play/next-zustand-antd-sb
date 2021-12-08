import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

interface props {
    logoAlt?: string;
    logoWidth?: number;
    logoHeight?: number;
}

export const LogoComponent = ({ logoAlt, logoWidth, logoHeight }: props) => {
    return (
        <Link href='/'>
            <a>
                <Image src={logo} alt={logoAlt} width={logoWidth} height={logoHeight} />
            </a>
        </Link>
    )
}