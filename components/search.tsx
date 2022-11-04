import { Transition } from "@headlessui/react";
import { ChangeEvent, useState, KeyboardEvent } from "react";

type Props = {
    placeholder: string;
    searchState: boolean;
};

export default function Search({ placeholder, searchState }: Props) {
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        window.location.href = `https://www.google.com/search?q=${search}`;
    };

    return (
        <section className="w-full">
            <Transition
                show={searchState}
                enter="transition duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <form className="flex flex-row items-center justify-center w-full backdrop-blur-md bg-gray-800/40 shadow-[0_0_3px_1px] shadow-gray-300 rounded-3xl">
                    <img
                        src="https://static-00.iconduck.com/assets.00/google-marketing-platform-icon-256x256-kwk0alas.png"
                        className="mx-4 my-2 h-8 w-8"
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
                        className="pr-6 py-4 w-full text-xl text-white placeholder:text-gray-100 bg-transparent  focus:outline-none "
                    />
                </form>
            </Transition>
        </section>
    );
}
