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

    getTime = async () => {
        const res = await this.getResource (`${this._apiBase}?${this._apiKey}&base_location=${this._baseLocation}&base_datetime=${this._baseDateTime}&target_location=${this._targetLocation}`);
        return this._extractApiData(res);
    }

    _extractApiData = (data) => {
        return {
            baseCity: data.base_location.requested_location,
            baseDay: data.base_location.datetime.split(' ')[0],
            baseTime: data.base_location.datetime.split(' ')[1],
            targetCity: data.target_location.requested_location,
            targetDay: data.target_location.datetime.split(' ')[0],
            targetTime: data.target_location.datetime.split(' ')[1]
        }
    }



    getTargetTime = async () => {
        const res = await this.getResource (`${this._apiBase}?${this._apiKey}&base_location=${this._baseLocation}&base_datetime=${this._baseDateTime}&target_location=${this._targetLocation}`);
        
        return this._extractTargetTime(res.target_location);
        // return this._extractApiData(res);
    }


    _extractTargetTime = (location) => {
        return {
            day: location.datetime.split(' ')[0],
            time: location.datetime.split(' ')[1]
        }
    }

}

export default TimeApiService;