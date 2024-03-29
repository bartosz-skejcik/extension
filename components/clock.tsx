import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";

type Props = {
    clock: boolean;
    greeting: boolean;
    theme: { name: string; values: { bg: string; items: string } };
};

function Clock({ clock, greeting, theme }: Props) {
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
            <section
                className="flex flex-col items-center justify-center w-full px-6 py-4 text-gray-200 bg-opacity-50 border-2 border-neutral-800 rounded-xl bg-gray-800/40"
                style={{
                    backgroundColor: theme.values && theme.values.bg,
                }}
            >
                <h1 className="font-semibold text-7xl text-start">
                    {/* display the current time */}
                    {time}
                </h1>
                <h2 className="text-2xl">
                    {/* display the current date */}
                    {date}
                </h2>
                <h2
                    className="pt-4 text-3xl font-semibold"
                    style={{
                        display: greeting ? "block" : "none",
                    }}
                >
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
