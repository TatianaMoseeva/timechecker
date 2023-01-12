import React, {useState} from 'react';
import TimeApiService from '../../services/TimeApiService';

import Loading from '../loading/Loading';
import ErrorMsg from '../errorMsg/ErrorMsg';
import DestCity from '../destCity/DestCity';
import HostCity from '../hostCity/HostCity';
import Msg from '../msg/Msg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './InfoBlocks.scss';


function InfoBlocks() {

    const timeApiService = new TimeApiService();
    timeApiService.getTime('Sydney, NSW', '2023-01-12', '16:00:00', 'Gold Coast, QLD').then(res => console.log(res));

    const [value, setValue] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const onDataLoaded = (value) => {
        setLoading(false);
        setValue({value});
    }

    const updateTime = () => {
        timeApiService
            .getTime()
            .then(onDataLoaded)
            .catch(onError);
    }
    
    
    function handleChange(prop, event) { 
		setValue({...value, ...{[prop]: event.target.value}}); 
	}

    const errorMsg = error ? <ErrorMsg/> : null;
    const spinner = loading ? <Loading/> : null;
    const content = !(loading || error) ? <View value={value} handleChange={handleChange}/> : null;

    return <main className="info-blocks">
                {errorMsg}
                {spinner}
                {content}
            </main>

}
  
const View = ({value, handleChange}) => {
    const {baseCity, baseDay, baseTime, targetCity, targetDay, targetTime} = value;

    return (
        <>
            <Row>
                <Col><HostCity city={baseCity} day={baseDay} time={baseTime} handleChange={handleChange}/></Col>
                <Col><DestCity city={targetCity} day={targetDay} time={targetTime} handleChange={handleChange}/></Col>
            </Row>
            <Msg />
        </>
    )
}


export default InfoBlocks;