/* eslint-disable @next/next/no-img-element */
import { Transition } from "@headlessui/react";
import { ChangeEvent, useState, KeyboardEvent } from "react";

type Props = {
    placeholder: string;
    searchState: boolean;
    searchEngine: { name: string; value: string };
    theme: { name: string; values: { bg: string; items: string } };
};

export default function Search({
    placeholder,
    searchState,
    searchEngine,
    theme,
}: Props) {
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        window.location.href = `${searchEngine.value}${search}`;
    };

    return (
        <Transition
            show={searchState}
            enter="transition duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="w-full"
        >
            <form
                className="flex flex-row items-center justify-center w-full px-1 mb-8 border-2 border-neutral-800 bg-gray-800/40 rounded-xl"
                style={{
                    backgroundColor: theme.values && theme.values.bg,
                }}
            >
                <img
                    src="https://static-00.iconduck.com/assets.00/google-marketing-platform-icon-256x256-kwk0alas.png"
                    className="w-8 h-8 mx-4 my-2"
                    id="search-icon"
                    alt="Google Search Icon"
                />
                <input
                    type="text"
                    ref={(input) => input && input.focus()}
                    placeholder={placeholder}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit(e);
                        }
                    }}
                    className="w-full py-3.5 pr-6 text-xl text-white bg-transparent placeholder:text-neutral-400 focus:outline-none "
                />
            </form>
        </Transition>
    );
}
