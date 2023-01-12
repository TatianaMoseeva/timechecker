import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './CopyMsg.scss';

function CopyMsg() {

    return <aside className="msg">
                <Row>
                    <Col md="auto">
                        <div className="msg__text">On 21/12/2022 at 4:00pm in Sydney(Australia) it will be 21/12/2022 7:00am in Warsaw (Poland)</div>
                    </Col>
                    <Col>
                    <div className="d-grid gap-2">
                        <Button variant="primary" className="msg__btn" size="lg">Copy</Button>
                    </div>
                    </Col>
                </Row>
            </aside>
  }
  
  export default CopyMsg;