import NavBar from "../components/NavBar";
import "../styles/global.css";
function App({ Component, pageProps }) {
  console.log("[RENder]");
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;
