import '~/styles/globals.css';
import '~/styles/overrides.css';
import { Manrope } from '@next/font/google';
import type { AppProps } from 'next/app';
const manrope = Manrope({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={manrope.className}>
      <Component {...pageProps} />
    </div>
  );
}
