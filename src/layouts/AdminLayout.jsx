import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <div className="container-fluid">
        <div className="row">
          <AdminSidebar />

          <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>

            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
