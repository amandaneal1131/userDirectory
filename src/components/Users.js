import React from "react";

function ResultList(props) {
  return (
    <table className="table">
      {props.results.map(result => (
        <table style="width:90%">
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

export default ResultList;
