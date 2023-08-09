import React, { useState } from "react";
import { customPut } from "../utils/custom-fetch";

export default function EditUser({ item, updateEdit, close }) {
  const [name, setName] = useState(item.name);
  const [email, setEmail] = useState(item.email);
  const [phone, setPhone] = useState(item.phone);

  //Function to Edit a User
  const editUser = async () => {
    let obj = {
      name: name,
      email: email,
      phone: phone,
    };
    try {
      await customPut(`/users/${item.id}`, obj).then((res) => {
        if (res) {
          close();
          const object = { ...res, ...obj };
          updateEdit(object);
        }
      });
    } catch (err) {
      alert(err);
    }
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
          <div className="input button" onClick={editUser}>
            UPDATE
          </div>
        </form>
      </div>
    </div>
  );
}
