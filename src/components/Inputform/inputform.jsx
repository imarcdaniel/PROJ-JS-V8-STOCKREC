import { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export default function UserInput(props) {

  const [stockSymbol, setstockSymbol] = useState("");
  const [days, setselectedNumberofDays] = useState(10);
  const [socialMedia, setsocialMedia] = useState(0);


const handleSubmit = (e) => {
  e.preventDefault();
  props.handleStockEntry(stockSymbol);
  props.handleDaysEntry(days);
  props.handleSocialMediaEntry(socialMedia);
 }

console.log(stockSymbol);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Stock : <input type="text" 
        value={stockSymbol}
        onChange={(e)=> setstockSymbol(e.target.value)}
        />
      </label>
      <label>
      Social Media :
      <select
          type="text" 
          value={socialMedia}
          onChange={(e)=> setsocialMedia(e.target.value)}
        >
          <option value="LINKEDIN">LINKEDIN</option>
          <option value="YOUTUBE">YOUTUBE</option>
          <option value="TWITTER">TWITTER</option>
          <option value="INSTAGRAM">INSTAGRAM</option>
          <option value="FACEBOOK">FACEBOOK</option>
        </select>
      
      </label>
      <label>
        Time Window : 
      </label> 
      <input type="number" 
        value={days}
        onChange={(e)=> setselectedNumberofDays(e.target.value)}
        />
      <input type="submit" />
    </form>
  );
}
