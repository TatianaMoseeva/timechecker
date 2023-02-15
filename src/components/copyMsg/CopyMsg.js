import React, {useState, useEffect} from 'react';
import Skeleton from '../skeleton/Skeleton';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

import './CopyMsg.scss';

function CopyMsg({value, normalizeNumb}) {
    

    const [message, setMessage] = useState(false);

    useEffect(() => {
        if (value.targetDay !== '' && value.targetTime !== '') {
            setMessage(true);
        }
       
        // eslint-disable-next-line
    }, [value.targetDay, value.targetTime])


    const skeleton = !message ? <Skeleton/> : null;
    const content = message ? <View value={value} normalizeNumb={normalizeNumb}/> : null;

    return <aside className="msg">
                <Row>
                    <Col md={{ span: 6, offset: 3 }} style={{position: "relative"}}>
                        <div className="msg__text">
                            {skeleton}
                            {content}
                        </div>
                        
                    </Col>
                </Row>
            </aside>
    }
  
    const View = ({value, normalizeNumb}) => {
        const {baseCity, baseDay, baseTime, targetCity, targetDay, targetTime} = value;

        const drawDay = (day) => {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return new Date(day).getDate() + '-' + months[new Date(day).getMonth()] + '-' + new Date(day).getFullYear();
        }

        const drawTime = (time) => {
            return normalizeNumb(new Date(time).getHours()) + ':' + normalizeNumb(new Date(time).getMinutes());
        }

        const hostDay = drawDay(baseDay);

        const hostTime = drawTime(baseTime);


        return <>
            <div>On {hostDay} at {hostTime} in {baseCity} it will be {targetDay} {targetTime} in {targetCity}</div>
            <div className="msg__icon">
                <FontAwesomeIcon icon={faCopy} title="Copy" />
            </div>
        
        </>

    }

  export default CopyMsg;