class AutocompleteApiService {
        
    _apiBase = 'https://api.geoapify.com/v1/geocode/autocomplete';
    _apiKey = 'apiKey=eec5d1e3583c462193d68543a48a00e6';
    _apiFormat = 'format=json';


    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getItems = async (input) => {
        const res = await this.getResource (`${this._apiBase}?text=${input}&${this._apiFormat}&${this._apiKey}`);
        return res;
    }


}

export default AutocompleteApiService;


