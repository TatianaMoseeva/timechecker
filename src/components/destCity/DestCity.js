import './DestCity.scss';

function DestCity() {

    return  <div className="info-blocks__section dest">
                <h2 className="info-blocks__title">Your location</h2>
                <input type="text" placeholder='City'/>
                <input type="text" placeholder='Day'/>
                <input type="text" placeholder='Time'/>
            </div>
       
    
  }
  
  export default DestCity;