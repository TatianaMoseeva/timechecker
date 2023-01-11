
import './HostCity.scss';

function HostCity({city, day, time}) {

    return  <div className="info-blocks__section host">
                <h2 className="info-blocks__title">Host city</h2>
                <input 
                    type="text" 
                    placeholder='City' 
                    value={city}
                />
                <input 
                    type="date" 
                    placeholder='Day'
                    value={day}
                />
                <input 
                    type="time" 
                    placeholder='Time'
                    value={time}
                />
            </div>
       
    
  }
  
  export default HostCity;