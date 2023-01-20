class TimeApiService {

    _apiBase = 'https://timezone.abstractapi.com/v1/convert_time/?';
    _apiKey = 'api_key=421a695e2c314d2c83abcb80dbc389c8';

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getTargetData = async (baseCity, baseDate, baseTime, targetCity) => {
        const res = await this.getResource (`${this._apiBase}${this._apiKey}&base_location=${baseCity}&base_datetime=${baseDate} ${baseTime}&target_location=${targetCity}`);

        return this._extractTargetData(res.target_location);
        
    }

    _extractTargetData = (location) => {
        return {
            targetDay: this._editTargetDay(location.datetime.split(' ')[0]),
            targetTime: this._editTargetTime(location.datetime.split(' ')[1])
        }
    }

    _editTargetDay = (day) => {
        let array = day.split('-');
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        array[1] = months[Number(array[1]-1)];

        return array.reverse().join('-');
    }

    _editTargetTime = (time) => {
        let hour = time.slice(0, 2);
        let minute = ':' + time.slice(3, 5);
        let result;
        
        if (hour === '12') {
            result = hour + minute + ' PM';
        } else if (hour > 12 ) {
            if(hour < 22) {
                result = '0' + String(hour - 12) + minute + ' PM'; 
            } else {
                result = String(hour - 12) + minute + ' PM';
            }
        } else {
            result = hour + minute + ' AM';
        }
        return result;
    }

}

export default TimeApiService;




