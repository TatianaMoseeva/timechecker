
import TimeApiService from '../../services/TimeApiService';

import DestCity from '../destCity/DestCity';
import HostCity from '../hostCity/HostCity';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './InfoBlocks.scss';

function InfoBlocks() {

    const timeApiService = new TimeApiService();

    console.log(timeApiService.test());

    return <main className="info-blocks">
                <Row>
                    <Col><HostCity /></Col>
                    <Col><DestCity /></Col>
                </Row>
            </main>
       
  }
  
  export default InfoBlocks;