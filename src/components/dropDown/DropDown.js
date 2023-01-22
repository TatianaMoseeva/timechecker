
function DropDown({suggestions}) {
    
    const items = suggestions.map(item => {
        return  <CityItem
                    key = {item.id}
                    city = {item.city}
                    state = {item.state}
                    country = {item.country}
                />;
    });

    return (
        <div className="info-blocks__city-items">
            {items}

        </div>

    )
}

const CityItem = ({city, state, country}) => {
    
    return  <div>
        {city}, {state}, {country}
    </div>
        
}

  
export default DropDown;


