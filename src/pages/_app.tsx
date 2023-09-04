import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '../config/i18next.config';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
