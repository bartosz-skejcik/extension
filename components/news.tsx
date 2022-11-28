import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

type Props = {
    news: boolean;
};

export default function News({ news }: Props) {
    const [data, setData] = useState<any>([]);

    const apiKey = "pub_13769e3292267531fdb828270f29e0f038c93";
    useEffect(() => {
        if (news === true && data.length < 1) {
            const link =
                "https://newsdata.io/api/1/news?apikey=" +
                apiKey +
                "&country=pl&language=pl";
            try {
                fetch(link)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        setData(data.results);
                    });
            } catch (e) {
                console.log(e);
            }
        }
    }, [news]);

    return (
        <Transition
            show={news}
            enter="transition duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="w-full h-full text-gray-200 flex flex-col items-center justify-center backdrop-blur-md bg-gray-800/40 bg-opacity-50 shadow-[0_0_3px_1px] shadow-gray-300 rounded-3xl overflow-y-scroll pt-20"
        >
            <h1 className="font-semibold text-3xl xl:text-4xl mb-10">News</h1>
            <div className="flex flex-wrap w-full h-full items-center justify-center gap-10">
                {data.map(
                    (item: any, i: number) =>
                        item.image_url && (
                            <div
                                key={i}
                                className="w-1/3 flex flex-col items-center justify-around h-[27rem] hover:scale-105 transition duration-300"
                            >
                                <img
                                    src={item.image_url}
                                    alt={item.title}
                                    className="rounded-t-2xl w-full max-h-56 object-cover"
                                />
                                <div className="w-full flex flex-col items-center justify-around space-y-5 h-full border-2 border-b-white/40 border-x-white/40 border-t-transparent rounded-b-3xl">
                                    <h1 className="text-xl font-semibold text-center mt-2">
                                        {item.title.length > 50
                                            ? item.title.slice(0, 50) + "..."
                                            : item.title}
                                    </h1>
                                    <p className="text-center">
                                        {item.description &&
                                        item.description.length > 90
                                            ? item.description.slice(0, 90) +
                                              "..."
                                            : item.description}
                                    </p>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="px-4 py-2 text-sm font-semibold text-gray-200 bg-gray-800/40 bg-opacity-50 rounded-3xl mb-4 hover:scale-110 hover:bg-gray-800 transition duration-300">
                                            Read more
                                        </button>
                                    </a>
                                </div>
                            </div>
                        )
                )}
            </div>
        </Transition>
    );
}
