import "./Workers.css";

import { useState, useEffect } from "react";
import { GetWorkers } from "../../services/apiCalls";
import { WorkersCards } from "../../common/WorkersCard/WorkersCard";
import { userData } from "../userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Workers = () => {
  const [workers, setWorkers] = useState([]);
  const rdxUser = useSelector(userData);

  const navigate = useNavigate();

  useEffect(() => {
    if (!rdxUser.credentials.token) {
      navigate("/");
    }
  }, [rdxUser]);

  useEffect(() => {
    if (workers.length === 0) {
      GetWorkers()
        .then((result) => {
          if (result.data.workers.length > 0) {
            setWorkers(result.data.workers);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [workers]);

  return (
    <div className="WorkersDesign">
      {workers.length > 0 ? (
        <div>
          {workers.map((worker) => {
            return (
              <div className="worker">
                <WorkersCards
                  key={worker.id}
                  name={worker.name}
                  license={worker.licenseNumber}
                  photo={worker.photo}
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
