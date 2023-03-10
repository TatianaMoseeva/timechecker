import React, {useState, useEffect} from 'react';
import TimeApiService from '../../services/TimeApiService';
import GeoApiService from '../../services/GeoApiService';
import AutocompleteApiService from '../../services/AutocompleteApiService';

import ErrorMsg from '../errorMsg/ErrorMsg';
import TargetCity from '../targetCity/TargetCity';
import HostCity from '../hostCity/HostCity';
import CopyMsg from '../copyMsg/CopyMsg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './InfoBlocks.scss';


const InfoBlocks = () => {

    const timeApiService = new TimeApiService();
    const geoApiService = new GeoApiService();
    const autocompleteApiService = new AutocompleteApiService();

    const [value, setValue] = useState({baseCity: '', baseDay: new Date(), baseTime: new Date(), targetCity: '', targetDay: '', targetTime: ''});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [suggestions, setSuggestions] = useState([]);
 
    const [autocompleteHost, setAutocompleteHost] = useState(true);
    const [autocompleteTarget, setAutocompleteTarget] = useState(false);


    const onError = () => {
        setError(true);
        setLoading(false);
    }

    useEffect(() => {
        if (value.baseCity.length >= 3) {
            const currentTimeout = setTimeout(() => {
                autocompleteCity(value.baseCity);
            }, 200);
            return () => clearTimeout(currentTimeout);
        }
        // eslint-disable-next-line
    }, [value.baseCity]);

    useEffect(() => {
        if (value.targetCity.length >= 3) {
            const currentTimeout = setTimeout(() => {
                autocompleteCity(value.targetCity);
            }, 200);
            return () => clearTimeout(currentTimeout);
        }
        // eslint-disable-next-line
    }, [value.targetCity]);

    useEffect(() => {
        if (!autocompleteHost) {
            finishEdit();
        }
        // eslint-disable-next-line
    }, [autocompleteHost])

    useEffect(() => {
        if (!autocompleteTarget) {
            finishEdit();
        }
        // eslint-disable-next-line
    }, [autocompleteTarget])

    
    useEffect(() => {
        if (!autocompleteHost && ! autocompleteTarget) {
            finishEdit();
        }
        // eslint-disable-next-line
    }, [value.baseTime, value.baseDay])

    const autocompleteCity = (input) => {
        autocompleteApiService
            .getItems(input)
            .then(showItems)
            .catch(onError);
    }

    const showItems = (data) => {
        setSuggestions(data);
    }

    const inputClickHandler = (event) => {
        if (event.target.name === 'host') {
            setAutocompleteHost(true);
            setSuggestions([]);
        } else {
            setAutocompleteTarget(true);
            setSuggestions([]);
        }
    }

    const itemClickHandler = (prop, event) => {
        setValue({...value, ...{[prop]: event.target.textContent}});
        setAutocompleteHost(false);
        setAutocompleteTarget(false);
    }

    const handleChange = (prop, event) => {
		setValue({...value, ...{[prop]: event.target.value}});
        setLoading(true);
        event.preventDefault();
	}

    const onLocationRecieved = (city) => {
        setValue({...value, ...city});
    }

    const prefillCity = () => {
        geoApiService
            .getUserLocation()
            .then(onLocationRecieved)
            .catch(onError);
    }
    
    const onDataLoading = () => {
        setLoading(true);
    }

    const onDataLoaded = (time) => {
        setLoading(false);
        setValue({...value, ...time});
    }

    const normalizeNumb = (num) => {
        let newNum = String(num);
        if (String(num).length === 1) {
            newNum = '0' + String(num);
        }
        return newNum;
    }

    const updateTime = () => {
        onDataLoading();
       
        let day = value.baseDay.getFullYear() + '-' + normalizeNumb(value.baseDay.getMonth()+1) + '-' + normalizeNumb(value.baseDay.getDate());
        let time = normalizeNumb(value.baseTime.getHours()) + ':' + value.baseTime.getMinutes();

        timeApiService
            .getTargetData(value.baseCity, day, time, value.targetCity)
            .then(onDataLoaded)
            .catch(onError);
    }
    
    const dateChange = (date) => {
        setValue({...value, ...{baseDay: date}})
	}

    const finishEdit = () => {
        if (value.baseCity !== '' && value.targetCity !== '') {
            updateTime();
        }
    }

    const timeChange = (date) => {
		setValue({...value, ...{baseTime: date}});
	}

    
    const errorMsg = error ? <ErrorMsg/> : null;
    
    const content = !(error) ? <View value={value} dateChange={dateChange} timeChange={timeChange} handleChange={handleChange} loading={loading} prefillCity={prefillCity} suggestions={suggestions} inputClickHandler={inputClickHandler} itemClickHandler={itemClickHandler} autocompleteHost={autocompleteHost} autocompleteTarget={autocompleteTarget} normalizeNumb={normalizeNumb}/> : null;

    return <main className="info-blocks">
                {errorMsg}
                {content}
            </main>

}
  
const View = ({value, handleChange, dateChange, timeChange, loading, prefillCity, suggestions, inputClickHandler, itemClickHandler, autocompleteHost, autocompleteTarget, normalizeNumb}) => {
    const {baseCity, baseDay, baseTime, targetCity, targetDay, targetTime} = value;

    return (
        <>
            <Row xs={1} sm={2}>
                <Col><HostCity dateChange={dateChange} timeChange={timeChange} city={baseCity} day={baseDay} time={baseTime} handleChange={handleChange} suggestions={suggestions} inputClickHandler={inputClickHandler} itemClickHandler={itemClickHandler} autocompleteHost={autocompleteHost}/></Col>
                <Col><TargetCity city={targetCity} day={targetDay} time={targetTime} handleChange={handleChange} loading={loading} prefillCity={prefillCity} suggestions={suggestions} inputClickHandler={inputClickHandler} itemClickHandler={itemClickHandler} autocompleteTarget={autocompleteTarget}/></Col>
            </Row>
            <CopyMsg value={value} normalizeNumb={normalizeNumb} loading={loading}/>
        </>
    )
}


export default InfoBlocks;