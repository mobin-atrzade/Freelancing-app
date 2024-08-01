import { Outlet } from "react-router-dom";

function AppLayout() {
    return <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
        <div className="bg-secondary-0 py-4 px-8">App Header</div>
        <div className="bg-secondary-0 row-start-1 row-span-2">App Sidebar</div>
        <div className="bg-secondary-100 p-8 overflow-y-auto">
            <div className="mx-auto max-w-screen-md flex-col gap-y-12">
                <Outlet />
            </div>
        </div>
    </div>;
}

export default AppLayout;