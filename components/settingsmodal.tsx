import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction } from "react";
import Input from "./input";
import ListboxSelect from "./listboxselect";
import SwitchButton from "./switchbutton";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    clock: boolean;
    setClock: (clock: boolean) => void;
    search: boolean;
    setSearch: (search: boolean) => void;
    weather: boolean;
    setWeather: (weather: boolean) => void;
    news: boolean;
    setNews: (news: boolean) => void;
    greeting: boolean;
    setGreeting: (greeting: boolean) => void;
    storage: Storage | undefined;
    selected: { name: string; value: number };
    setSelected: (value: { name: string; value: number }) => void;
    searchEngine: { name: string; value: string };
    setSearchEngine: (value: { name: string; value: string }) => void;
    theme: {
        name: string;
        values: { bg: string; items: string; text: string };
    };
    setTheme: (value: {
        name: string;
        values: { bg: string; items: string; text: string };
    }) => void;
    bgUrl: string;
    setBgUrl: Dispatch<SetStateAction<string>>;
};

export default function SettingsModal({
    open,
    setOpen,
    clock,
    setClock,
    search,
    setSearch,
    weather,
    setWeather,
    news,
    setNews,
    greeting,
    setGreeting,
    storage,
    selected,
    setSelected,
    searchEngine,
    setSearchEngine,
    theme,
    setTheme,
    bgUrl,
    setBgUrl,
}: Props) {
    function closeModal() {
        setOpen(false);
    }

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                style={{
                                    backgroundColor:
                                        theme.values && theme.values.bg,
                                    color: theme.values && theme.values.text,
                                }}
                                className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform border-2 border-neutral-800 backdrop-blur-md rounded-xl"
                            >
                                <Dialog.Title
                                    as="h3"
                                    className="text-2xl font-semibold leading-6"
                                >
                                    User settings
                                </Dialog.Title>
                                <section className="flex flex-col items-center justify-center my-4">
                                    <div className="flex flex-row items-center justify-between w-full pt-2 pb-4">
                                        <h3 className="text-xl">Dock size</h3>
                                        <ListboxSelect
                                            label="dockSize"
                                            storage={storage}
                                            selected={selected}
                                            setSelected={setSelected}
                                            options={[
                                                { name: "Small", value: 3 },
                                                { name: "Medium", value: 3.5 },
                                                { name: "Large", value: 4 },
                                                { name: "Huge", value: 4.5 },
                                            ]}
                                            theme={theme}
                                        />
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-full pt-4 pb-2 border-t-2 border-gray-500">
                                        <div className="flex flex-row items-center justify-between w-full pb-1">
                                            <h3 className="text-xl">Clock</h3>
                                            <SwitchButton
                                                enabled={clock}
                                                runFunction={() => {
                                                    setClock(!clock);
                                                    storage &&
                                                        storage.setItem(
                                                            "clockSettings",
                                                            JSON.stringify(
                                                                !clock
                                                            )
                                                        );
                                                }}
                                            />
                                        </div>
                                        <div className="flex flex-row items-center justify-between w-full pt-1">
                                            <h3 className="ml-3 text-lg">
                                                Greeting
                                            </h3>
                                            <SwitchButton
                                                enabled={greeting}
                                                runFunction={() => {
                                                    setGreeting(!greeting);
                                                    storage &&
                                                        storage.setItem(
                                                            "greeting",
                                                            JSON.stringify(
                                                                !greeting
                                                            )
                                                        );
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-full py-2">
                                        <div className="flex flex-row items-center justify-between w-full pb-1">
                                            <h3 className="text-xl">Search</h3>
                                            <SwitchButton
                                                enabled={search}
                                                runFunction={() => {
                                                    setSearch(!search);
                                                    storage &&
                                                        storage.setItem(
                                                            "searchSettings",
                                                            JSON.stringify(
                                                                !search
                                                            )
                                                        );
                                                }}
                                            />
                                        </div>
                                        <div className="flex flex-row items-center justify-between w-full pt-1">
                                            <h3 className="ml-3 text-lg">
                                                Search Engine
                                            </h3>
                                            <ListboxSelect
                                                label="searchEngine"
                                                storage={storage}
                                                selected={searchEngine}
                                                setSelected={setSearchEngine}
                                                options={[
                                                    {
                                                        name: "Google",
                                                        value: "https://google.com/search?q=",
                                                    },
                                                    {
                                                        name: "Bing",
                                                        value: "https://bing.com/search?q=",
                                                    },
                                                    {
                                                        name: "DuckDuckGo",
                                                        value: "https://duckduckgo.com/?q=",
                                                    },
                                                    {
                                                        name: "Qwant",
                                                        value: "https://qwant.com/?q=",
                                                    },
                                                ]}
                                                theme={theme}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full py-2">
                                        <h3 className="text-xl">News</h3>
                                        <SwitchButton
                                            enabled={news}
                                            runFunction={() => {
                                                setNews(!news);
                                                storage &&
                                                    storage.setItem(
                                                        "newsSettings",
                                                        JSON.stringify(!news)
                                                    );
                                            }}
                                        />
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full pt-2 pb-2">
                                        <h3 className="text-xl">Weather</h3>
                                        <SwitchButton
                                            enabled={weather}
                                            runFunction={() => {
                                                setWeather(!weather);
                                                storage &&
                                                    storage.setItem(
                                                        "weatherSettings",
                                                        JSON.stringify(!weather)
                                                    );
                                            }}
                                        />
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full pt-2 pb-4">
                                        <h3 className="text-xl">Theme</h3>
                                        <ListboxSelect
                                            label="theme"
                                            storage={storage}
                                            selected={theme}
                                            setSelected={setTheme}
                                            options={[
                                                {
                                                    name: "Dark Blue",
                                                    values: {
                                                        bg: "#111827",
                                                        items: "#1f2937",
                                                        text: "#9ca3af",
                                                    },
                                                },
                                                {
                                                    name: "Dark Gray",
                                                    values: {
                                                        bg: "#171717",
                                                        items: "#262626",
                                                        text: "#a3a3a3",
                                                    },
                                                },
                                                {
                                                    name: "Light",
                                                    values: {
                                                        bg: "#e5e5e5",
                                                        items: "#a3a3a3",
                                                        text: "black",
                                                    },
                                                },
                                                {
                                                    name: "Dark",
                                                    values: {
                                                        bg: "#000",
                                                        items: "#232323",
                                                        text: "#a3a3a3",
                                                    },
                                                },
                                            ]}
                                            theme={theme}
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-between w-full pt-4 border-t-2 border-gray-500">
                                        <h3 className="mb-2 text-xl">
                                            Wallpaper
                                        </h3>
                                        <Input
                                            value={bgUrl}
                                            setValue={setBgUrl}
                                            placeholder={"Wallpaper link"}
                                            storage={storage}
                                            theme={theme}
                                        />
                                    </div>
                                </section>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
