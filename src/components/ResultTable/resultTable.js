import React from "react";
import './resultTable.css'
import { getStockData } from "../../api";

export default function ResultTable() {

    const data = getStockData('FB', ['2019-01-01']);
    console.log(data);
  return (
    <div className="results">
      <table>
        <tr>
          <th>Stock</th>
          <th>Price</th>
          <th>Social Media Count</th>
          <th>Recommendation</th>
          <th>date</th>
        </tr>
        <tr>
          <td>FB</td>
          <td>19.99</td>
          <td>19999</td>
          <td>BUY</td>
        </tr>
        {data.slice(0, 10).map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.stock}</td>
              <td>{val.price}</td>
              <td>{val.socialMediaCount}</td>
              <td>{val.recommendation}</td>
                <td>{val.date}</td> 
            </tr>
          )
        })}
      </table>
    </div>
  );
}
