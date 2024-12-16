import '../styles/globals.css';
import Navbar from '../components/Navbar'; // Example component

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* Add your global Navbar here */}
      <Component {...pageProps} /> {/* Render the current page */}
    </>
  );
}


