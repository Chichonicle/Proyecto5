import "./AllUsers.css";

import { useState, useEffect } from "react";

export const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length === 0) {
      GetWorkers()
        .then((result) => {
          if (result.data.users.length > 0) {
            setUsers(result.data.users);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [users]);

  return (
    <div className="AllUsersDesign">
      {users.length > 0 ? (
        <div>
          {users.map((user) => {
            return (
              <div className="allUsers">
                <UsersCards
                  key={user.id}
                  name={user.name}
                  email={user.email}
                  active={user.is_active}
                  role={user.role}
                  created={user.created_at}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div>Aun no los tenemos</div>
      )}
    </div>
  );
};
