import React from "react";

export default function ResultTable() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Stock</th>
          <th> Price</th>
          <th>Recommendation</th>
        </tr>
        <tr>
          <td>FB</td>
          <td>19.99</td>
          <td>BUY</td>
        </tr>
      </table>
    </div>
  );
}
