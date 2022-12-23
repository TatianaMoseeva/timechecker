import './Header.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {

    return <header className="header">
                <Row>
                    <Col xs={12} md={10} lg={8}>
                        <h1 className="header__title">What time is the meeting?</h1>
                        <div className="header__descr">Plan your participation in international meetings. Check what time it will be in your area when the meeting takes place</div>
                    </Col>
                </Row>
                
            </header>
       
    
  }
  
  export default Header;