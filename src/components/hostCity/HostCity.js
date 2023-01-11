
import './HostCity.scss';

function HostCity({city, day, time, handleChange}) {

    return  <div className="info-blocks__section host">
                <h2 className="info-blocks__title">Host city</h2>
                <input 
                    type="text" 
                    placeholder='City' 
                    value={city}
                    onChange={event => handleChange('baseCity', event)}
                />
                <input 
                    type="date" 
                    placeholder='Day'
                    value={day}
                    onChange={event => handleChange('baseDay', event)}
                />
                <input 
                    type="time" 
                    placeholder='Time'
                    value={time}
                    onChange={event => handleChange('baseTime', event)}
                />
            </div>
       
    
  }
  
  export default HostCity;