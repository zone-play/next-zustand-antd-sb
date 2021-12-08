import { ReactNode } from 'react';
import Head from 'next/head';
import { MediaContextProvider } from '../media';

interface ComponentProps {
    headTitle?: string;
    headDes?: string;
    headContent?: string;
    header?: ReactNode;
    main?: ReactNode;
    footer?: ReactNode;
}

export const LayoutComponent = ({
    headTitle,
    headDes,
    headContent,
    header,
    main,
    footer,
}: ComponentProps) => {
    return (
        <MediaContextProvider>
            <Head>
                <title>{headTitle}</title>
                <meta name={headDes} content={headContent} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {header}
            {main}
            {footer}
        </MediaContextProvider>
    );
};