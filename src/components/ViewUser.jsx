import React, { useState, useEffect } from "react";
import { customGet } from "../utils/custom-fetch";
import { useNavigate, useParams } from "react-router-dom";

export default function ViewUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();

  //Function to fetch single User
  useEffect(() => {
    (async () => {
      try {
        customGet(`/users/${id}`).then((res) => {
          res ? setData(res) : null;
        });
      } catch (err) {
        alert(err);
      }
    })();
  }, []);

  return (
    <div>
      <form action="/">
        <div className="close" onClick={() => navigate("/home")}>
          X
        </div>
        <div className="input">
          <div>Name:</div>
          <div>{data?.name}</div>
        </div>
        <div className="input">
          <div>Email:</div>
          <div>{data?.email}</div>
        </div>
        <div className="input">
          <div>Phone Number:</div>
          <div>{data?.phone}</div>
        </div>
      </form>
    </div>
  );
}
