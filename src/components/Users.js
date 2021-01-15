import React from "react";

function Users(props) {
  return (
    <table className="table">
      {props.users.map(result => (
        <table style="width:100%">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
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
