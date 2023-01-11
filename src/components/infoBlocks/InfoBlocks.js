import React, {useState} from 'react';
import TimeApiService from '../../services/TimeApiService';

import DestCity from '../destCity/DestCity';
import HostCity from '../hostCity/HostCity';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './InfoBlocks.scss';

const initData = {
    baseCity: 'Los Angeles, CA', baseDay: '2020-05-01', baseTime: '07:00:00',
    targetCity: 'Oxford, United Kingdom', targetDay: '', targetTime: ''
}


function InfoBlocks() {
    const timeApiService = new TimeApiService();

    timeApiService.getTargetTime().then(res => console.log(res));




    const [value, setValue] = useState(initData);

    return <main className="info-blocks">
                <Row>
                    <Col><HostCity city={value.baseCity} day={value.baseDay} time={value.baseTime}/></Col>
                    <Col><DestCity city={value.targetCity} day={value.targetDay} time={value.targetTime}/></Col>
                </Row>
            </main>
            
  }
  
  export default InfoBlocks;