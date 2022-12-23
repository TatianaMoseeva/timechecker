class TimeApiService {

    _apiBase = 'https://timezone.abstractapi.com/v1/convert_time/';
    _apiKey = 'api_key=4e2b5503e73e4530b9c2241753d53558';

    _baseLocation = 'Los Angeles, CA';
    _baseDateTime = '2020-05-01 07:00:00';
    _targetLocation = 'Oxford, United Kingdom';

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getTime =  () => {
        return  this.getResource (`${this._apiBase}?${this._apiKey}&base_location=${this._baseLocation}&base_datetime=${this._baseDateTime}&target_location=${this._targetLocation}`);
    }

    test = () => {
        return this.getResource('https://timezone.abstractapi.com/v1/convert_time/?api_key=4e2b5503e73e4530b9c2241753d53558&base_location=Los Angeles, CA&base_datetime=2020-05-01 07:00:00&target_location=Oxford, United Kingdom');
    }

}

export default TimeApiService;