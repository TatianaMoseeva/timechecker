class TimeApiService {

    _apiBase = 'https://timezone.abstractapi.com/v1/convert_time/';
    _apiKey = 'api_key=4e2b5503e73e4530b9c2241753d53558';

    _baseLocation = 'Sydney, NSW';
    _baseDateTime = '2023-01-11 14:00:00';
    _targetLocation = 'Los Angeles, CA';

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getTargetTime = async () => {
        const res = await this.getResource (`${this._apiBase}?${this._apiKey}&base_location=${this._baseLocation}&base_datetime=${this._baseDateTime}&target_location=${this._targetLocation}`);
        
        return this._extractTargetTime(res.target_location);
    }

    _extractTargetTime = (location) => {
        return {
            day: location.datetime.split(' ')[0],
            time: location.datetime.split(' ')[1]
        }
    }

}

export default TimeApiService;