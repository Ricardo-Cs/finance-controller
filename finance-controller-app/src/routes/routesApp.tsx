import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/notFound/notFound";
import Home from "../pages/home/home";
import { Fragment } from "react/jsx-runtime";
import Login from "../pages/login/login";
import PrivateRoutes from "../components/privateRoute/privateRoute";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                    <Route element={<Login />} path="/login" />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;