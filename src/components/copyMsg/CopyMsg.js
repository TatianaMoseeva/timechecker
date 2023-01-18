import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './CopyMsg.scss';

function CopyMsg() {

    return <aside className="msg">
                <Row>
                    <Col>
                        <div className="msg__text">On 21-Dec-2022 at 04:00 PM in Sydney, New South Wales it will be 21-Dec-2022 07:00 AM in Oxford, United Kingdom</div>
                    </Col>
                </Row>
            </aside>
  }
  
  export default CopyMsg;