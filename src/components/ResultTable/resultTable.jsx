import './resultTable.css'

export default function ResultTable(props) {

    const data = props.data;
    
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
        {data.map((val, key) => {
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
