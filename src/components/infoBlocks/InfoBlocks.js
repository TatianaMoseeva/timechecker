import React, {useState} from 'react';
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


function InfoBlocks() {

    const timeApiService = new TimeApiService();
    const geoApiService = new GeoApiService();
    const autocompleteApiService = new AutocompleteApiService();


    const [value, setValue] = useState({baseCity: '', baseDay: new Date(), baseTime: new Date(), targetCity: '', targetDay: '', targetTime: ''});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const onUserInput = (input) => {
        if (input.length >= 3) {
            setTimeout(() => {
                autocompeteCity(input);
            }, 300)
        }
    }

    const showItems = (data) => {
        console.log(data);
    }

    const autocompeteCity = (input) => {

        autocompleteApiService
            .getItems(input)
            .then(showItems)
            .catch(onError);
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

    function normalizeNumb(num) {
        let newNum = String(num);
        if (String(num).length === 1) {
            newNum = '0' + String(num);
        }
        return newNum;
    }

    const updateTime = () => {
        onDataLoading();

        let day = value.baseDay.getFullYear() + '-' + value.baseDay.getMonth()+1 + '-' + normalizeNumb(value.baseDay.getDate());
        let time = normalizeNumb(value.baseTime.getHours()) + ':' + value.baseTime.getMinutes();

        timeApiService
            .getTargetData(value.baseCity, day, time, value.targetCity)
            .then(onDataLoaded)
            .catch(onError);
    }
    
    function dateChange(date) {
        setValue({...value, ...{baseDay: date}})
	}

    function finishEdit() {
        if (value.baseCity !== '' && value.targetCity !== '') {
            updateTime();
        }
    }

    function timeChange(date) {
		setValue({...value, ...{baseTime: date}});
	}

    function handleChange(prop, event) {
		setValue({...value, ...{[prop]: event.target.value}});
        event.preventDefault();
        if (value.baseCity.length > 2) {
            onUserInput(value.baseCity); //реагирует только когда напечатано 4 символа
        }
	}


    
    const errorMsg = error ? <ErrorMsg/> : null;
    
    const content = !(error) ? <View value={value} dateChange={dateChange} timeChange={timeChange} handleChange={handleChange} finishEdit={finishEdit} loading={loading} prefillCity={prefillCity}/> : null;

    return <main className="info-blocks">
                {errorMsg}
                {content}
            </main>

}
  
const View = ({value, handleChange, dateChange, timeChange, finishEdit, loading, prefillCity}) => {
    const {baseCity, baseDay, baseTime, targetCity, targetDay, targetTime} = value;

    return (
        <>
            <Row xs={1} sm={2}>
                <Col><HostCity dateChange={dateChange} timeChange={timeChange} city={baseCity} day={baseDay} time={baseTime} handleChange={handleChange} finishEdit={finishEdit}/></Col>
                <Col><TargetCity city={targetCity} day={targetDay} time={targetTime} handleChange={handleChange} finishEdit={finishEdit} loading={loading} prefillCity={prefillCity}/></Col>
            </Row>
            <CopyMsg />
        </>
    )
}


export default InfoBlocks;