
import { createGlobalStyle } from "styled-components"
import '../styles/SearchComponent.css';

const GlobalStyles=createGlobalStyle`body{padding:0;margin:0; font-family: 'Poppins', sans-serif;background-color:#eee}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
`;

export default function App({ Component, pageProps }) {
  return(<>
  <GlobalStyles/>
  <Component {...pageProps} />
  </>)
}
