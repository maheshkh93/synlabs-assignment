import React, { useEffect, useState } from "react";
import { customGet } from "../utils/custom-fetch";
import User from "./User";
import Header from "./Header";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

export default function Home() {
  const [data, setData] = useState([]);
  const [addUser, setAddUser] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [editItem, setEditItem] = useState();

  // Function to load data initially
  useEffect(() => {
    (async () => {
      try {
        const res = await customGet("/users");
        setData(res);
      } catch (err) {
        alert(err);
      }
    })();
  }, []);

  // Function to Update new added user
  const updateUser = (obj) => {
    setData(data.concat(obj));
  };

  //Function to Update user after deleting
  const updateDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  //Function to open edit window
  const openEdit = (id) => {
    setEditUser(true);
    let obj = data.filter((item) => item.id == id);
    setEditItem(obj[0]);
  };

  //Function to update user after editing
  const updateEdit = (obj) => {
    let i = data.findIndex((item) => item.id == obj.id);
    data.splice(i, 1, obj);
  };

  return (
    <>
      <Header />
      <div className="table">
        <div className="heading">
          Users List
          <button onClick={() => setAddUser(true)}>ADD</button>
        </div>
        <table>
          <thead>
            <tr>
              <th className="name">NAME</th>
              <th className="email">EMAIL</th>
              <th className="phone">PHONE NUMBER</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0
              ? data.map((item) => (
                  <User
                    item={item}
                    key={item.id}
                    updateDelete={updateDelete}
                    openEdit={openEdit}
                  />
                ))
              : null}
          </tbody>
        </table>
        {addUser ? (
          <AddUser close={() => setAddUser(false)} updateUser={updateUser} />
        ) : null}
        {editUser && editItem ? (
          <EditUser
            item={editItem}
            close={() => setEditUser(false)}
            updateEdit={updateEdit}
          />
        ) : null}
      </div>
    </>
  );
}
