import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

import './CopyMsg.scss';

function CopyMsg() {

    return <aside className="msg">
                <Row>
                    <Col md={{ span: 6, offset: 3 }} style={{position: "relative"}}>
                        <div className="msg__text">On 21-Dec-2022 at 04:00 PM in Sydney, New South Wales it will be 21-Dec-2022 07:00 AM in Oxford, United Kingdom</div>
                        <div className="msg__icon">
                            <FontAwesomeIcon icon={faCopy} title="Copy" />
                        </div>
                    </Col>
                </Row>
            </aside>
  }
  
  export default CopyMsg;