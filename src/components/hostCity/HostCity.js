
import './HostCity.scss';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HostCity({city, day, time, handleChange, dateChange}) {

    return  <div className="info-blocks__section host">
                <h2 className="info-blocks__title">Host city</h2>
                <input 
                    type="text" 
                    placeholder='City' 
                    value={city}
                    onChange={event => handleChange('baseCity', event)}
                />
                <DatePicker 
                    selected={day}
                    onChange={dateChange}
                    dateFormat="dd-MMM-yyyy"
                    placeholderText="Click to select a date"
                />

                <DatePicker 
                    selected={day}
                    onChange={dateChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="hh:mm a"
                    placeholderText="Click to select time"
                />

            </div>
  }
  
  export default HostCity;





  