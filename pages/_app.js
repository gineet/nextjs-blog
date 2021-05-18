// Top level component that is common across all pages
// Can be used to keep state when navigating between different pages

// Can add global CSS files by importing them here
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}