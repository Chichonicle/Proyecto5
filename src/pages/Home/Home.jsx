import React, { useEffect, useState } from "react";
import "./Home.css";
import { GetProyects } from "../../services/apiCalls";

export const Home = () => {
  const [proyects, setProyects] = useState([]);

  useEffect(() => {
    if (proyects.length === 0) {
      GetProyects()
        .then((proyects) => {
          setProyects(proyects.data.proyects);
        })
        .catch((error) => console.log(error));
    }
  }, [proyects]);

  return (
    <div className="homeDesign">
      {proyects.length > 0 ? (
        <>
          {proyects.map((proyects) => {
            return (
              <div className="card" key={proyects.id}>
                {proyects.tattooname}
                <img
                  className="avatarCharacter"
                  src={proyects.tattoo_url}
                  alt={proyects.tattooname}
                />
              </div>
            );
          })}
        </>
      ) : (
        <div> aun no han venido </div>
      )}
    </div>
  );
};
