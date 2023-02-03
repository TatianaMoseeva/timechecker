function DropDown({suggestions, itemClickHandler}) {

    const items = suggestions.map(item => {
        return  <CityItem
                    key = {item.id}
                    city = {item.city}
                    state = {item.state}
                    country = {item.country}
                    itemClickHandler={itemClickHandler}
                />;
    });

    return (
        <ul className="info-blocks__city-items">
            {items}
        </ul>
    )
}



const CityItem = ({city, state, country, itemClickHandler}) => {
    return  <li onClick={itemClickHandler}>
                {city}{state}{country}
            </li>

}

  
export default DropDown;


