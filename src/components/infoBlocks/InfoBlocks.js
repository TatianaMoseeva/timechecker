import React, {useState} from 'react';
import TimeApiService from '../../services/TimeApiService';

import ErrorMsg from '../errorMsg/ErrorMsg';
import TargetCity from '../targetCity/TargetCity';
import HostCity from '../hostCity/HostCity';
import CopyMsg from '../copyMsg/CopyMsg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './InfoBlocks.scss';


function InfoBlocks() {

    const timeApiService = new TimeApiService();

    const [value, setValue] = useState({baseCity: '', baseDay: new Date(), baseTime: new Date(), targetCity: '', targetDay: '', targetTime: ''});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    
    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const onCharLoading = () => {
        setLoading(true);
    }

    const onDataLoaded = (time) => {
        setLoading(false);
        setValue({...value, ...time});
    }

    const updateTime = () => {
        onCharLoading();

        let day = value.baseDay.getFullYear() + '-' + value.baseDay.getMonth()+1 + '-' + value.baseDay.getDate();
        let time = value.baseTime.getHours() + ':' + value.baseTime.getMinutes();

        timeApiService
            .getTargetData(value.baseCity, day, time, value.targetCity)
            .then(onDataLoaded)
            .catch(onError);
    }
    

    function dateChange(date) {
		setValue({...value, ...{baseDay: date}});
	}

    function timeChange(date) {
		setValue({...value, ...{baseTime: date}});
	}

    function handleChange(prop, event) {
		setValue({...value, ...{[prop]: event.target.value}});
        event.preventDefault();
	}

    function finishEdit() {
        if (value.baseCity !== '' && value.baseDay !== '' && value.baseTime !== '' && value.targetCity !== '') {
            updateTime();
            console.log(value.targetDay);
        }
    }
    
    const errorMsg = error ? <ErrorMsg/> : null;
    
    const content = !(error) ? <View value={value} dateChange={dateChange} timeChange={timeChange} handleChange={handleChange} finishEdit={finishEdit} loading={loading}/> : null;

    return <main className="info-blocks">
                {errorMsg}
                {content}
            </main>

}
  
const View = ({value, handleChange, dateChange, timeChange, finishEdit, loading}) => {
    const {baseCity, baseDay, baseTime, targetCity, targetDay, targetTime} = value;

    return (
        <>
            <Row xs={1} sm={2}>
                <Col><HostCity dateChange={dateChange} timeChange={timeChange} city={baseCity} day={baseDay} time={baseTime} handleChange={handleChange} /></Col>
                <Col><TargetCity city={targetCity} day={targetDay} time={targetTime} handleChange={handleChange} finishEdit={finishEdit} loading={loading}/></Col>
            </Row>
            <CopyMsg />
        </>
    )
}


export default InfoBlocks;