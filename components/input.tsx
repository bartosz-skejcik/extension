import React, { Dispatch, SetStateAction } from "react";

type Props = {
    value: string | number;
    setValue: Dispatch<SetStateAction<string>>;
    placeholder: string;
    storage?: Storage | undefined;
};

export default function input({
    value,
    setValue,
    placeholder,
    storage,
}: Props) {
    return (
        <input
            type={"text"}
            className={`px-3 py-1 backdrop-blur-md bg-gray-600/40 text-gray-300 w-full rounded-xl`}
            onChange={(e) => {
                setValue(e.target.value);
                storage &&
                    storage.setItem(
                        "wallpaper",
                        JSON.stringify(e.target.value)
                    );
            }}
            value={value}
            placeholder={placeholder}
        ></input>
    );
}
