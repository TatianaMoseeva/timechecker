
import './HostCity.scss';

import DropDown from '../dropDown/DropDown';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function HostCity({city, day, time, handleChange, dateChange, timeChange,  autocomplete, suggestions, inputClickHandler, itemClickHandler}) {

    const dropdown = autocomplete && city.length >= 3 
        ? <DropDown 
            suggestions={suggestions} 
            itemClickHandler={itemClickHandler}/> 
        : null;

    return  <div className="info-blocks__section host">
                <h2 className="info-blocks__title">Host city</h2>

                <div className="info-blocks__city">
                    <input 
                        autoFocus
                        type="text" 
                        placeholder='Enter the host city' 
                        value={city}
                        onChange={event => handleChange('baseCity', event)}
                        onClick={inputClickHandler}
                    />
                    {dropdown}
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
