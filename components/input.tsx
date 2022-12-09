import React, { Dispatch, SetStateAction } from "react";
import { isThrowStatement } from "typescript";

type Props = {
    value: string | number;
    setValue: Dispatch<SetStateAction<string>>;
    placeholder: string;
    storage?: Storage | undefined;
    theme: {
        name: string;
        values: { bg: string; items: string; text: string };
    };
};

export default function input({
    value,
    setValue,
    placeholder,
    storage,
    theme,
}: Props) {
    return (
        <input
            type={"text"}
            className={`px-3 py-1 backdrop-blur-md w-full rounded-xl placeholder:text-[${
                theme.values && theme.values.text
            }]`}
            style={{
                backgroundColor: theme.values && theme.values.items,
                color: theme.values && theme.values.text,
            }}
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
