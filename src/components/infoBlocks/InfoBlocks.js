
import DestCity from '../destCity/DestCity';
import HostCity from '../hostCity/HostCity';

import './InfoBlocks.scss';

function InfoBlocks() {

    return <main className="info-blocks">
                <HostCity />
                <DestCity />
            </main>
       
    
  }
  
  export default InfoBlocks;