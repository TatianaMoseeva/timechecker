import './DestCity.scss';



function DestCity({city, day, time, handleChange, finishEdit, loading}) {
    let loadClass = "";
    if (loading) {
        loadClass+="loading";
    }

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
                    className={loadClass}

                />
                <input 
                    type="time" 
                    placeholder='Time'
                    value={time}
                    readOnly={true}
                    className={loadClass}
                />
            </div>
    
  }
  
  export default DestCity;