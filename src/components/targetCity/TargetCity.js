import './TargetCity.scss';
import React, {useEffect} from 'react';

import DropDown from '../dropDown/DropDown';


function TargetCity({city, day, time, handleChange, loading, prefillCity, suggestions, inputClickHandler, itemClickHandler, autocompleteTarget}) {

    useEffect(() => {
        prefillCity();
        // eslint-disable-next-line
    }, [])

    const dropdown = autocompleteTarget && city.length >= 3 
    ? <DropDown 
        suggestions={suggestions} 
        itemClickHandler={itemClickHandler}/> 
    : null;


    let loadClass = "";
    if (loading) {
        loadClass+="loading";
    }

    return  <div className="info-blocks__section dest">
                <h2 className="info-blocks__title">Your location</h2>
                <div className="info-blocks__city">
                    <input 
                        type="text"
                        name="target"
                        placeholder='City'
                        value={city}
                        onChange={event => handleChange('targetCity', event)}
                        onClick={event => inputClickHandler(event)}
                    />
                    {dropdown}
                </div>

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