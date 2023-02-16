const DropDown = ({suggestions, itemClickHandler, autocompleteHost}) => {
    
    const items = suggestions.map(item => {
        return  <CityItem
                    key = {item.id}
                    city = {item.city}
                    state = {item.state}
                    country = {item.country}
                    itemClickHandler={itemClickHandler}
                    autocompleteHost={autocompleteHost}
                />;
    });

    return (
        <ul className="info-blocks__city-items">
            {items}
        </ul>
    )
}


const CityItem = ({city, state, country, itemClickHandler, autocompleteHost}) => {

    const prop = autocompleteHost ? 'baseCity' : 'targetCity';

    return  <li onClick={event => itemClickHandler(prop, event)}>
                {city}{state}{country}
            </li>

}

  
export default DropDown;


