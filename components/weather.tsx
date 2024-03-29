/* eslint-disable @next/next/no-img-element */
import { Transition } from "@headlessui/react";
import {
    ArrowDownCircleIcon,
    ArrowUpCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import weatherHelper from "../helpers/weather.helper";

type Props = {
    weather: boolean;
    theme: { name: string; values: { bg: string; items: string } };
};

function Weather({ weather, theme }: Props) {
    const apiKey = "v07xGuWKiWUnzSG3BWFRqzG6SUF0vmMc";

    const [locationKey, setLocationKey] = useState<string>();
    const [locationData, setLocationData] = useState<any>();

    const [data, setData] = useState<any>([]);
    const [forecast, setForecast] = useState<any>([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            weatherHelper.getLocationKey(
                position.coords.latitude,
                position.coords.longitude,
                setLocationKey,
                setLocationData,
                apiKey
            );
        });
        if (locationKey) {
            weatherHelper.getForecast(locationKey, setForecast, apiKey);
            weatherHelper.sendRequest(locationKey, setData, apiKey);
        }
    }, [locationKey, weather]);
    return data.length > 0 && forecast.DailyForecasts.length > 0 ? (
        <Transition
            show={weather}
            enter="transition duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className={"w-full"}
        >
            <section
                className="flex flex-col items-center justify-center w-full px-6 py-4 text-gray-200 border-2 border-neutral-800 bg-gray-800/40 rounded-xl"
                style={{
                    backgroundColor: theme.values && theme.values.bg,
                }}
            >
                <h1 className="text-3xl font-semibold xl:text-4xl">
                    {/* if locationData.LocalizedName is longer than 10 characters set the rest of it to ... */}
                    {locationData.LocalizedName.length > 11
                        ? locationData.LocalizedName.slice(0, 11)
                        : locationData.LocalizedName}
                    ,{locationData.Country?.ID}
                </h1>
                <div className="flex flex-row items-center justify-around">
                    <img
                        src={`https://developer.accuweather.com/sites/default/files/${data[0].WeatherIcon?.toString().padStart(
                            2,
                            "0"
                        )}-s.png`}
                        alt="weather icon"
                        className="w-24"
                    />
                    <h2 className="text-7xl">
                        {Math.round(data[0].Temperature?.Metric?.Value)}°C
                    </h2>
                </div>
                <h3 className="text-2xl font-bold">{data[0].WeatherText}</h3>
                <div className="flex flex-row items-center justify-center w-full mt-2 space-x-5">
                    <h4 className="font-semibold text-xl flex items-center justify-center space-x-1.5">
                        <ArrowUpCircleIcon className="w-5 h-5 text-green-500" />
                        :
                        <span>
                            {Math.round(
                                forecast.DailyForecasts[0].Temperature.Maximum
                                    .Value
                            )}
                            °C
                        </span>
                    </h4>
                    <h5 className="font-semibold text-xl flex items-center justify-center space-x-1.5">
                        <ArrowDownCircleIcon className="w-5 h-5 text-red-500" />
                        :
                        <span>
                            {Math.round(
                                forecast.DailyForecasts[0].Temperature.Minimum
                                    .Value
                            )}
                            °C
                        </span>
                    </h5>
                </div>
                <div className="flex flex-col items-center justify-center w-full mt-2 space-x-0 md:flex-row md:space-x-16">
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-md">
                            Real feel:{" "}
                            {Math.round(
                                data[0].RealFeelTemperature?.Metric?.Value
                            )}
                            °C
                        </h3>
                        <h3 className="text-md">
                            Humidity: {data[0].RelativeHumidity}%
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-md">
                            Wind:{" "}
                            {Math.round(data[0].Wind?.Speed?.Metric?.Value)}{" "}
                            km/h
                        </h3>
                        <h3 className="text-md">
                            Press: {data[0].Pressure?.Metric?.Value} hPa
                        </h3>
                    </div>
                </div>
                <section className="flex flex-row items-center justify-center w-full mt-3 space-x-3 lg:space-x-10">
                    {/* map the forecast data and display name of the day in 3 latters, icon, max and min temperatures dont include the [0] index of forecast */}
                    {forecast.DailyForecasts.map((day: any, index: number) => {
                        if (index !== 0) {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center space-y-1.5"
                                >
                                    <h3 className="text-md">
                                        {weatherHelper.convertDateToDayName(
                                            day.Date
                                        )}
                                    </h3>
                                    <img
                                        src={`https://developer.accuweather.com/sites/default/files/${day.Day.Icon.toString().padStart(
                                            2,
                                            "0"
                                        )}-s.png`}
                                        alt="weather icon"
                                        className="w-12"
                                    />
                                    <h3 className="text-md">
                                        {Math.round(
                                            day.Temperature.Maximum.Value
                                        )}
                                        °C
                                    </h3>
                                    <h3 className="text-md">
                                        {Math.round(
                                            day.Temperature.Minimum.Value
                                        )}
                                        °C
                                    </h3>
                                </div>
                            );
                        }
                    })}
                </section>
            </section>
        </Transition>
    ) : (
        <></>
    );
}

export default Weather;
