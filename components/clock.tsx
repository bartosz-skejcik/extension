import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";

type Props = {
    clock: boolean;
};

function Clock({ clock }: Props) {
    const [time, setTime] = useState<string>();
    const [date, setDate] = useState<string>();
    const greetings = ["Dzień dobry", "Dobry wieczór"];

    useEffect(() => {
        const interval = setInterval(() => {
            // format time to: 14:06
            setTime(
                new Date().toLocaleTimeString("pl-PL", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: false,
                })
            );
            // format date to: Monday, November 1, 2022
            setDate(
                new Date().toLocaleDateString("pl-PL", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return time ? (
        <Transition
            show={clock}
            enter="transition duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className={"w-full"}
        >
            <section className="w-full text-gray-200 flex flex-col items-center justify-center backdrop-blur-md bg-gray-800/40 bg-opacity-50 shadow-[0_0_3px_1px] shadow-gray-300 px-6 pt-4 rounded-3xl">
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
                        greetings[new Date().getHours() < 17 ? 0 : 1]
                    }
                </h2>
            </section>
        </Transition>
    ) : (
        <div></div>
    );
}

export default Clock;
