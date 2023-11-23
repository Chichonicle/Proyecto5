import "./AllUsers.css";
import { useState, useEffect } from "react";
import { GetAllUsers } from "../../services/apiCalls";
import { UsersCards } from "../../common/UsersCards/UsersCards";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";


export const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const rdxUser = useSelector(userData);
  const token = rdxUser.credentials.token;



  useEffect(() => {
    if (users.length === 0) { console.log("entra");
      GetAllUsers(token)
        .then((result) => {console.log(result);
          if (result.data.length > 0) {
            setUsers(result.data);
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
