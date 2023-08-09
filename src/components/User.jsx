import React, { useState } from "react";
import { customDelete } from "../utils/custom-fetch";
import { useNavigate } from "react-router-dom";

export default function User({ item, updateDelete, openEdit }) {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);

  //function to delete user
  const deleteUser = async (id) => {
    await customDelete(`/users/${id}`).then((res) => {
      if (res) {
        updateDelete(id);
      }
    });
  };
  return (
    <tr
      key={item.id}
      className="details"
      onMouseEnter={() => setEdit(true)}
      onMouseLeave={() => setEdit(false)}
    >
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      {edit ? (
        <td className="edit">
          <i
            className="fa fa-eye edit-icon"
            onClick={() => navigate(`/viewUser/${item.id}`)}
          ></i>
          <i
            className="fa fa-edit edit-icon"
            onClick={() => openEdit(item.id)}
          ></i>
          <i
            className="fa fa-trash-o edit-icon"
            onClick={() => deleteUser(item.id)}
          ></i>
        </td>
      ) : null}
    </tr>
  );
}
