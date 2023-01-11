import React, {useState} from 'react';
import TimeApiService from '../../services/TimeApiService';

import DestCity from '../destCity/DestCity';
import HostCity from '../hostCity/HostCity';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './InfoBlocks.scss';

const initData = {
    baseCity: 'Sydney, New South Wales', baseDay: '2023-01-11', baseTime: '14:00:00',
    targetCity: 'Los Angeles, CA', targetDay: '', targetTime: ''
}


function InfoBlocks() {
    const timeApiService = new TimeApiService();

    timeApiService.getTargetTime().then(res => console.log(res));


    const [value, setValue] = useState(initData);

    function handleChange(prop, event) { 
		setValue({...value, ...{[prop]: event.target.value}}); 
	}

    return <main className="info-blocks">
                <Row>
                    <Col><HostCity city={value.baseCity} day={value.baseDay} time={value.baseTime} handleChange={handleChange}/></Col>
                    <Col><DestCity city={value.targetCity} day={value.targetDay} time={value.targetTime} handleChange={handleChange}/></Col>
                </Row>
            </main>

  }
  
  export default InfoBlocks;