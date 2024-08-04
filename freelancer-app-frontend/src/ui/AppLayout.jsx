import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Sidebar from "./Sidebar";

function AppLayout({ children }) {
    return <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
        <Header />
        {/* <Sidebar /> */}
        {children}
        <div className="bg-secondary-100 p-8 overflow-y-auto">
            <div className="mx-auto max-w-screen-xl flex-col gap-y-12">
                <Outlet />
            </div>
        </div>
    </div>;
}

export default AppLayout;