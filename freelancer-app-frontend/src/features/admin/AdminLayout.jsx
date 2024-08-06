import { HiCollection, HiHome, HiOutlineViewGrid, HiUserAdd } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import { CustomNavLink } from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";

function AdminLayout() {
    return (
        <AppLayout>
            <Sidebar>
                <CustomNavLink to="dashboard">
                    <HiHome />
                    <span>داشبورد</span>
                </CustomNavLink>

                <CustomNavLink to="users">
                    <HiUserAdd />
                    <span>کاربرها</span>
                </CustomNavLink>

                <CustomNavLink to="projects">
                    <HiOutlineViewGrid />
                    <span>پروژه ها</span>
                </CustomNavLink>

                <CustomNavLink to="proposals">
                    <HiCollection />
                    <span>درخواست ها</span>
                </CustomNavLink>

            </Sidebar>
        </AppLayout>
    )
}

export default AdminLayout;