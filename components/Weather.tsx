import React, { useEffect, useState } from "react";

type Props = {
    weather: boolean;
};

function Weather({ weather }: Props) {
    const [data, setData] = useState<any>([]);

    const sendRequest = async (lat: any, lon: any, key: string) => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
        );
        const json = await response.json();
        setData(json);
    };
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            sendRequest(
                position.coords.latitude,
                position.coords.longitude,
                "c4d2bf29784c20816ff3debb069c1e00"
            );
        });
    }, []);
    return (
        data &&
        weather && (
            <section className="w-full text-gray-200 flex flex-col items-center justify-center backdrop-blur-md bg-gray-100/10 bg-opacity-50 shadow-[0_0_3px_1px] shadow-gray-300 px-6 py-4 rounded-3xl">
                <h1 className="font-semibold text-3xl">
                    {data.name}, {data.sys?.country}
                </h1>
                <h2 className="text-7xl">
                    {Math.round(data.main?.temp - 273.15)}°C
                </h2>
                <h3 className="font-semibold text-xl flex flex-row items-center justify-center space-x-2">
                    {data.weather && (
                        <img
                            src={`http://openweathermap.org/img/w/${data?.weather[0].icon}.png`}
                            alt="weather icon"
                        />
                    )}
                    <p>
                        {data.weather &&
                            data.weather[0].description
                                .split(" ")
                                .map((word: string) => {
                                    return (
                                        word[0].toUpperCase() + word.slice(1)
                                    );
                                })
                                .join(" ")}
                    </p>
                </h3>
                <h2 className="font-semibold text-xl flex flex-row space-x-6">
                    <p>⬆️: {Math.round(data.main?.temp_max - 273.15)}°C</p>
                    <p>⬇️: {Math.round(data.main?.temp_min - 273.15)}°C</p>
                </h2>
            </section>
        )
    );
}

export default Weather;
