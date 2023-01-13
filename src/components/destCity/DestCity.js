import './DestCity.scss';

function DestCity({city, day, time, handleChange, finishEdit}) {

    return  <div className="info-blocks__section dest">
                <h2 className="info-blocks__title">Your location</h2>
                <input 
                    type="text" 
                    placeholder='City' 
                    value={city}
                    onChange={event => handleChange('targetCity', event)}
                    onBlur={finishEdit}
                />
                <input 
                    type="date" 
                    placeholder='Day'
                    value={day}
                    readOnly={true}
                />
                <input 
                    type="time" 
                    placeholder='Time'
                    value={time}
                    readOnly={true}
                />
            </div>
       
    
  }
  
  export default DestCity;