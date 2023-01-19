class GeoApiService {

    _apiBase = 'https://ipgeolocation.abstractapi.com/v1/';
    _apiKey = 'api_key=bf781e84152845a79691d9ed0b4b049e';

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getUserLocation = async () => {
        const res = await this.getResource (`${this._apiBase}?${this._apiKey}`);
        return this._extractLocation(res);
    }

    _extractLocation = (data) => {
        if (data.city) {
            return {
                targetCity: data.city + ', ' + data.region
            }
        }

    }

}

export default GeoApiService;