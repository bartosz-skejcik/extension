import { ChangeEvent, useState, KeyboardEvent } from "react";
import Image from "next/image";

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

    return searchState ? (
        <form className="flex flex-row items-center justify-center w-full backdrop-blur-md bg-gray-900/10 shadow-[0_0_3px_1px] shadow-gray-300 rounded-3xl">
            <img
                src="https://static-00.iconduck.com/assets.00/google-marketing-platform-icon-256x256-kwk0alas.png"
                className="mx-4 my-2 h-8 w-8"
                id="search-icon"
                alt="Google Search Icon"
            />
            <input
                type="text"
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
    ) : (
        <div></div>
    );
}
