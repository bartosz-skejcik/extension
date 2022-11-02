import React, { useEffect, useState } from "react";

type Props = {
    clock: boolean;
};

function Clock({ clock }: Props) {
    const [time, setTime] = useState<any>([]);
    const [date, setDate] = useState<any>([]);
    const greetings = ["Good Morning", "Good Afternoon", "Good Evening"];

    useEffect(() => {
        const interval = setInterval(() => {
            // format time to: 14:06
            setTime(
                new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: false,
                })
            );
            // format date to: Monday, November 1, 2022
            setDate(
                new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        time &&
        clock && (
            <section className="w-full text-gray-200 flex flex-col items-center justify-center backdrop-blur-md bg-gray-100/10 bg-opacity-50 shadow-[0_0_3px_1px] shadow-gray-300 px-6 pt-4 rounded-3xl">
                <h1 className="font-semibold text-7xl text-start">
                    {/* display the current time */}
                    {time}
                </h1>
                <h2 className="text-2xl">
                    {/* display the current date */}
                    {date}
                </h2>
                <h2 className="text-3xl font-semibold py-8">
                    {
                        // display the current greeting
                        greetings[
                            new Date().getHours() < 12
                                ? 0
                                : new Date().getHours() < 18
                                ? 1
                                : 2
                        ]
                    }
                    , Bartek
                </h2>
            </section>
        )
    );
}

export default Clock;
