const getLocationKey = async (
    lat: number,
    long: number,
    setLocationKey: any,
    setLocationData: any,
    apiKey: string
) => {
    // get location key from lat and long coordinates using accuweather api (location key is needed to get weather data)
    // add all necessary headers
    const response = await fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${lat.toString()},${long.toString()}&language=pl-PL`,
        {
            method: "GET",
            headers: {
                Accept: "*/*",
                "Accept-Encoding": "gzip",
                "Accept-Language": "en-US",
            },
        }
    );
    const data = await response.json();
    setLocationKey(data[0].Key);
    setLocationData(data[0]);
};

const sendRequest = async (
    locationKey: string,
    setData: any,
    apiKey: string
) => {
    const res = await fetch(
        `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true`,
        {
            method: "GET",
            headers: {
                Accept: "*/*",
                "Accept-Encoding": "gzip",
                "Accept-Language": "en-US",
            },
        }
    );
    const data = await res.json();
    setData(data);
};

const getForecast = async (
    locationKey: string,
    setForecast: any,
    apiKey: string
) => {
    const res = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&details=true&metric=true`,
        {
            method: "GET",
            headers: {
                Accept: "*/*",
                "Accept-Encoding": "gzip",
                "Accept-Language": "en-US",
            },
        }
    );
    const data = await res.json();
    setForecast(data);
};

const convertDateToDayName = (date: string) => {
    const day = new Date(date).getDay();
    switch (day) {
        case 0:
            return "Niedz";
        case 1:
            return "Pon";
        case 2:
            return "Wt";
        case 3:
            return "Śro";
        case 4:
            return "Czw";
        case 5:
            return "Pią";
        case 6:
            return "Sob";
    }
};

export default {
    getLocationKey,
    sendRequest,
    getForecast,
    convertDateToDayName,
};
