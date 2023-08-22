/* eslint-disable @next/next/no-img-element */
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

type Props = {
    news: boolean;
    theme: { name: string; values: { bg: string; items: string } };
};

export default function News({ news, theme }: Props) {
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
                        setData(data.results);
                    });
            } catch (e) {
                console.log(e);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            className="flex flex-col items-center justify-center w-full h-full pt-20 overflow-y-scroll text-gray-200 bg-opacity-50 border-2 border-neutral-800 backdrop-blur-md bg-gray-800/40 rounded-xl"
            style={{
                backgroundColor: theme.values && theme.values.bg,
            }}
        >
            <h1 className="mb-10 text-3xl font-semibold xl:text-4xl">News</h1>
            <div className="flex flex-wrap items-center justify-center w-full h-full gap-10">
                {data.map((item: any, i: number) => (
                    <div
                        key={i}
                        className="w-1/3 flex flex-col items-center justify-around h-[27rem] hover:scale-105 transition duration-300"
                    >
                        <img
                            src={
                                item.image_url
                                    ? item.image_url
                                    : "/no-image.jpg"
                            }
                            alt={item.title}
                            className="object-cover w-full rounded-t-2xl max-h-56"
                        />
                        <div className="flex flex-col items-center justify-around w-full h-full space-y-5 border-2 border-b-white/40 border-x-white/40 border-t-transparent rounded-b-3xl">
                            <h1 className="mt-2 text-xl font-semibold text-center">
                                {item.title.length > 50
                                    ? item.title.slice(0, 50) + "..."
                                    : item.title}
                            </h1>
                            <p className="text-center">
                                {item.description &&
                                item.description.length > 90
                                    ? item.description.slice(0, 90) + "..."
                                    : item.description}
                            </p>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="px-4 py-2 mb-4 text-sm font-semibold text-gray-200 transition duration-300 bg-opacity-50 rounded-xl bg-gray-800/40 hover:scale-110 hover:bg-gray-800">
                                    Read more
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Transition>
    );
}
