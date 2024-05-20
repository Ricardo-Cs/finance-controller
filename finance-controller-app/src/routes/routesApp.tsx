import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/notFound/notFound";
import Home from "../pages/home/home";
import { Fragment } from "react/jsx-runtime";
import Login from "../pages/login/login";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }: any) => {
    const { signed }: any = useAuth();

    return signed === true ? <Item /> : <Login />;
};

function RoutesApp() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Private Item={Home} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;