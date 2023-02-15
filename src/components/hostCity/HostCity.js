
import './HostCity.scss';

import DropDown from '../dropDown/DropDown';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function HostCity({city, day, time, handleChange, dateChange, timeChange, suggestions, inputClickHandler, itemClickHandler, autocompleteHost}) {

    const dropdown = autocompleteHost && city.length >= 3 
        ? <DropDown 
            suggestions={suggestions} 
            itemClickHandler={itemClickHandler} autocompleteHost={autocompleteHost}/> 
        : null;

    return  <div className="info-blocks__section host">
                <h2 className="info-blocks__title">Host city</h2>

                <div className="info-blocks__city">
                    <input 
                        type="text"
                        name="host"
                        placeholder='Enter the host city' 
                        value={city}
                        onChange={event => handleChange('baseCity', event)}
                        onClick={event => inputClickHandler(event)}
                    />
                    {dropdown}
                </div>

                <DatePicker 
                    selected={day}
                    onChange={dateChange}
                    dateFormat="dd-MMM-yyyy"
                    placeholder='Click to choose the day'
                    onKeyDown={(e) => {
                        e.preventDefault();
                     }}
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
                    onKeyDown={(e) => {
                        e.preventDefault();
                     }}
                />

            </div>
  }
  
  export default HostCity;
