import React, {useState, useEffect} from 'react';
import TimeApiService from '../../services/TimeApiService';

import Loading from '../loading/Loading';
import DestCity from '../destCity/DestCity';
import HostCity from '../hostCity/HostCity';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './InfoBlocks.scss';


function InfoBlocks() {

    const timeApiService = new TimeApiService();
    // timeApiService.getTime().then(res => console.log(res));

    const [value, setValue] = useState({});
    const {baseCity, baseDay, baseTime, targetCity, targetDay, targetTime} = value;
    
    const [loading, setLoading] = useState(true);
    const spinner = loading ? <Loading/> : null;


    useEffect(() => {
        updateTime();
    });

    const onDataLoaded = (value) => {
        setValue({value});
    }

    const updateTime = () => {
        timeApiService
            .getTime()
            .then(onDataLoaded)
    }
    
    

    function handleChange(prop, event) { 
		setValue({...value, ...{[prop]: event.target.value}}); 
	}

    return <main className="info-blocks">
                {spinner}
                <Row>
                    <Col><HostCity city={baseCity} day={baseDay} time={baseTime} handleChange={handleChange}/></Col>
                    <Col><DestCity city={targetCity} day={targetDay} time={targetTime} handleChange={handleChange}/></Col>
                </Row>
            </main>

  }
  
  export default InfoBlocks;