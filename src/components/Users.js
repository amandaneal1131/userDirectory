import React from "react";

function Users(props) {
  return (
    <table className="table">
      {props.users.map(result => (
        <table style="width:100%">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Reingold</td>
            <td>38</td>
          </tr>
        </table>
      
      ))}
    </table>
  );
}

export default Users;
