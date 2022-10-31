import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Meta />
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
