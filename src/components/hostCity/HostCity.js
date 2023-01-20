
import './HostCity.scss';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HostCity({city, day, time, handleChange, dateChange, timeChange, finishEdit}) {

    return  <div className="info-blocks__section host">
                <h2 className="info-blocks__title">Host city</h2>
                <div className="info-blocks__city">
                    <input 
                        type="text" 
                        placeholder='Enter the host city' 
                        value={city}
                        onChange={event => handleChange('baseCity', event)}
                        onBlur={finishEdit}
                    />
                </div>

                <DatePicker 
                    selected={day}
                    onChange={dateChange}
                    dateFormat="dd-MMM-yyyy"
                    placeholder='Click to choose the day'
                />

                <DatePicker 
                    selected={time}
                    onChange={timeChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="hh:mm a"
                    placeholder='Click to choose time'
                />

            </div>
  }
  
  export default HostCity;