import React from "react";

const AdminUsers = () => {
  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>Admin</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>User</td>
            </tr>
            {/* Diğer kullanıcılar buraya eklenebilir */}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default AdminUsers;
