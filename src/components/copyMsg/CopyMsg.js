import React, {useState, useEffect} from 'react';
import Skeleton from '../skeleton/Skeleton';
import Loading from '../loading/Loading';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

import './CopyMsg.scss';

function CopyMsg({value, normalizeNumb, loading}) {
    

    const [message, setMessage] = useState(false);

    useEffect(() => {
        if (value.targetDay !== '' && value.targetTime !== '') {
            setMessage(true);
        }
        // eslint-disable-next-line
    }, [value.targetDay, value.targetTime])


    const skeleton = message || loading ? null : <Skeleton/>;
    const spinner = loading ? <Loading/> : null;
    const content = message && !loading ? <View value={value} normalizeNumb={normalizeNumb}/> : null;


    return <aside className="msg">
                <Row>
                    <Col md={{ span: 6, offset: 3 }} style={{position: "relative"}}>
                        <div className="msg__body">
                            {skeleton}
                            {spinner}
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
            return normalizeNumb(new Date(day).getDate()) + '-' + months[new Date(day).getMonth()] + '-' + new Date(day).getFullYear();
        }

        const drawTime = (time) => {
            return editTimeFormat(normalizeNumb(new Date(time).getHours()) + ':' + normalizeNumb(new Date(time).getMinutes()));
        }

        const editTimeFormat = (time) => {
            let hour = time.slice(0, 2);
            let minute = ':' + time.slice(3, 5);
            let result;
            
            if (hour === '12') {
                result = hour + minute + ' PM';
            } else if (hour > 12 ) {
                if(hour < 22) {
                    result = '0' + String(hour - 12) + minute + ' PM'; 
                } else {
                    result = String(hour - 12) + minute + ' PM';
                }
            } else {
                result = hour + minute + ' AM';
            }
            return result;
        }

        const hostDay = drawDay(baseDay);
        const hostTime = drawTime(baseTime);

        const message = `On ${hostDay} at ${hostTime} in ${baseCity} it will be ${targetDay} ${targetTime} in ${targetCity}`;

        return <>
            <div>{message}</div>

            <div className="msg__icon">
                <CopyToClipboard text={message}>
                    <FontAwesomeIcon icon={faCopy} title="Copy" />
                </CopyToClipboard>
            </div>
        </>

    }

  export default CopyMsg;