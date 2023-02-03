import './TargetCity.scss';
import React, {useEffect} from 'react';

function TargetCity({city, day, time, handleChange, loading, prefillCity}) {

    useEffect(() => {
        prefillCity();
        // eslint-disable-next-line
    }, [])


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

                />
                <input 
                    type="text" 
                    placeholder='Day in your location'
                    value={day}
                    readOnly={true}
                    className={loadClass}
                />
                <input 
                    type="text" 
                    placeholder='Time in your location'
                    value={time}
                    readOnly={true}
                    className={loadClass}
                />
            </div>
    
  }
  
  export default TargetCity;