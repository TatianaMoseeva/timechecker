import React, {useState, useEffect} from 'react';
import TimeApiService from '../../services/TimeApiService';

import Loading from '../loading/Loading';
import ErrorMsg from '../errorMsg/ErrorMsg';
import DestCity from '../destCity/DestCity';
import HostCity from '../hostCity/HostCity';
import CopyMsg from '../copyMsg/CopyMsg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './InfoBlocks.scss';


function InfoBlocks() {

    const timeApiService = new TimeApiService();

    const [value, setValue] = useState({baseCity: '', baseDay: '', baseTime: '', targetCity: '', targetDay: '', targetTime: ''});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log('!');
    }, [value.targetDay])


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
        timeApiService
            .getTargetTime(value.baseCity, value.baseDay, value.baseTime, value.targetCity)
            .then(onDataLoaded)
            .catch(onError);
    }
    
    function handleChange(prop, event) { 
		setValue({...value, ...{[prop]: event.target.value}});
        event.preventDefault();
	}


    function finishEdit() {
        if (value.baseCity !== '' && value.baseDay !== '' && value.baseTime !== '' && value.targetCity !== '') {
            updateTime();
        } 
    }
    
    const errorMsg = error ? <ErrorMsg/> : null;
    // const spinner = loading ? <Loading/> : null;
    // const content = !(loading || error) ? <View value={value} handleChange={handleChange} finishEdit={finishEdit} loading={loading}/> : null;
    const content = !(error) ? <View value={value} handleChange={handleChange} finishEdit={finishEdit} loading={loading}/> : null;

    return <main className="info-blocks">
                {errorMsg}
                {/* {spinner} */}
                {content}
            </main>

}
  
const View = ({value, handleChange, finishEdit, loading}) => {
    const {baseCity, baseDay, baseTime, targetCity, targetDay, targetTime} = value;

    return (
        <>
            <Row>
                <Col><HostCity city={baseCity} day={baseDay} time={baseTime} handleChange={handleChange}/></Col>
                <Col><DestCity city={targetCity} day={targetDay} time={targetTime} handleChange={handleChange} finishEdit={finishEdit} loading={loading}/></Col>
            </Row>
            <CopyMsg />
        </>
    )
}


export default InfoBlocks;