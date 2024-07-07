import { Outlet, useLocation } from "react-router-dom";

const Main = () => {

    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');

    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;