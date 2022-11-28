import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

import worldcupHelper from "../helpers/worldcup.helper";

type Props = {
    worldcup: boolean;
};

export default function WorldCup({ worldcup }: Props) {
    const title = "World Cup";

    const [data, setData] = useState([]);

    const getData = async () => {
        const data: any = worldcupHelper.Login(
            "bartek@paczesny.pl",
            "Mac1725245!!!"
        );
        setData(data);
    };

    useEffect(() => {
        if (data && data.length < 1) {
            getData();
            console.log(data);
        }
    }, [worldcup]);

    return (
        <Transition
            show={worldcup}
            enter="transition duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="w-full text-gray-200 flex flex-col items-center justify-center backdrop-blur-md bg-gray-800/40 bg-opacity-50 shadow-[0_0_3px_1px] shadow-gray-300 px-6 py-4 rounded-3xl"
        >
            <h1 className="font-semibold text-3xl xl:text-4xl mb-10">
                {title.split("").map((letter, i) => (
                    // get a random color for each letter
                    <span
                        key={i}
                        className="text-[#ff0000]"
                        style={{
                            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
                        }}
                    >
                        {letter}
                    </span>
                ))}
            </h1>
        </Transition>
    );
}
