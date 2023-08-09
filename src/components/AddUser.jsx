import React, { useState } from "react";
import { customPost } from "../utils/custom-fetch";

export default function AddUser({ close, updateUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //Function to create new user
  const createUser = async () => {
    let obj = {
      name: name,
      email: email,
      phone: phone,
    };
    await customPost("/users", obj).then((res) => {
      if (res) {
        close();
        const object = { ...res, ...obj };
        updateUser(object);
      }
    });
  };
  return (
    <div className="main">
      <div className="add-user">
        <form action="/">
          <div className="close" onClick={close}>
            X
          </div>
          <div className="input">
            <div>Name</div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input">
            <div>Email</div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <div>Phone Number</div>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input button" onClick={createUser}>
            ADD
          </div>
        </form>
      </div>
    </div>
  );
}
