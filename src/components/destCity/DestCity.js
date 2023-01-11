import './DestCity.scss';

function DestCity({city, day, time, handleChange}) {

    return  <div className="info-blocks__section dest">
                <h2 className="info-blocks__title">Your location</h2>
                <input 
                    type="text" 
                    placeholder='City' 
                    value={city}
                    onChange={event => handleChange('targetCity', event)}
                />
                <input 
                    type="date" 
                    placeholder='Day'
                    value={day}
                    onChange={event => handleChange('targetDay', event)}
                />
                <input 
                    type="time" 
                    placeholder='Time'
                    value={time}
                    onChange={event => handleChange('targetTime', event)}
                />
            </div>
       
    
  }
  
  export default DestCity;