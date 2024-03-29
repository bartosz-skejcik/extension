import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type Props = {
    selected:
        | { name: string; value: number | string }
        | { name: string; values: { bg: string; items: string } };
    setSelected: (value: any) => void;
    storage: Storage | undefined;
    options: any;
    label: string;
    theme: {
        name: string;
        values: { bg: string; items: string; text: string };
    };
};

function ListboxSelect({
    selected,
    setSelected,
    storage,
    options,
    label,
    theme,
}: Props) {
    return (
        <div className="z-40">
            <Listbox
                value={selected}
                onChange={(option: any) => {
                    setSelected(option);
                    if (storage) storage.setItem(label, JSON.stringify(option));
                }}
            >
                <div>
                    <Listbox.Button
                        style={{
                            color: theme.values && theme.values.text,
                        }}
                        className="cursor-default rounded-xl backdrop-blur-sm bg-gray-200/10 py-1 pl-3 pr-9 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                    >
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDownIcon
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options
                            className={`absolute border-gray-200/20 border mt-1 max-h-60 overflow-auto rounded-md backdrop-blur-md bg-gray-600/30 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${
                                label == "searchEngine" ? "-ml-3" : ""
                            }`}
                        >
                            {options.map((option: any, optionIdx: number) => (
                                <Listbox.Option
                                    key={optionIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none font-semibold text-md rounded-md mx-1 ${
                                            active
                                                ? "backdrop-blur-md bg-gray-600/10"
                                                : ""
                                        }`
                                    }
                                    value={option}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block font-normal truncate px-4 rounded-md ${
                                                    selected
                                                        ? "bg-blue-500"
                                                        : "font-normal"
                                                }`}
                                            >
                                                {option.name}
                                            </span>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}

export default ListboxSelect;
