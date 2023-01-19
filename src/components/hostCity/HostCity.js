
import './HostCity.scss';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HostCity({city, day, time, handleChange, dateChange, timeChange, finishEdit}) {

    return  <div className="info-blocks__section host">
                <h2 className="info-blocks__title">Host city</h2>
                <input 
                    type="text" 
                    placeholder='Enter the host city' 
                    value={city}
                    onChange={event => handleChange('baseCity', event)}
                    onBlur={finishEdit}
                />
                <DatePicker 
                    selected={day}
                    onChange={dateChange}
                    dateFormat="dd-MMM-yyyy"
                    // placeholderText="Click to select a date"
                    onBlur={finishEdit}
                />

                <DatePicker 
                    selected={time}
                    onChange={timeChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="hh:mm a"
                    // placeholderText="Click to select time"
                    onBlur={finishEdit}
                />

            </div>
  }
  
  export default HostCity;





  