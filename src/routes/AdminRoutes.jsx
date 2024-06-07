import AdminLayout from "../layouts/AdminLayout";
import AdminPage from "../pages/Admin/AdminPage";
import AdminUsersPage from "../pages/Admin/UsersPage";

export const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
      {
        path: "users",
        element: <AdminUsersPage />,
      },
    ],
  },
];
