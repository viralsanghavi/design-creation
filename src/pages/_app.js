import "@/styles/globals.css";
import Home from ".";

export default function App({Component, pageProps}) {
  return (
    <Home>
      <Component {...pageProps} />
    </Home>
  );
}
