import Search from "../components/search";
import Weather from "../components/weather";
import Clock from "../components/clock";
import Dock from "../components/dock";
import SettingsModal from "../components/settingsmodal";
import NewAppModal from "../components/newappmodal";

import { ItemInterface } from "react-sortablejs";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
    const [clock, setClock] = useState(true);
    const [search, setSearch] = useState(true);
    const [weather, setWeather] = useState(true);
    const [storage, setStorage] = useState<Storage>();
    const [apps, setApps] = useState<ItemInterface[]>([
        {
            id: 1,
            href: "https://google.com",
            icon: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
        },

        {
            id: 2,
            href: "https://messenger.com",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png",
        },

        {
            id: 3,
            href: "https://facebook.com",
            icon: "https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-128.png",
        },

        {
            id: 4,
            href: "https://instagram.com",
            icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
        },

        {
            id: 5,
            href: "https://discord.com",
            icon: "https://www.tellmebest.com/wp-content/uploads/2022/03/discord-logo-4-1.png",
        },
    ]);
    const [selected, setSelected] = useState<{
        name: string | null;
        value: number;
    }>({
        name: "Medium",
        value: 3.5,
    });

    useEffect(() => {
        // get settings from localStorage
        const weatherSettings = localStorage.getItem("weatherSettings");
        const clockSettings = localStorage.getItem("clockSettings");
        const searchSettings = localStorage.getItem("searchSettings");
        const appSettings = localStorage.getItem("appSettings");
        const dockSize = localStorage.getItem("dockSize");

        // set settings
        if (weatherSettings) setWeather(JSON.parse(weatherSettings));
        if (clockSettings) setClock(JSON.parse(clockSettings));
        if (searchSettings) setSearch(JSON.parse(searchSettings));
        if (appSettings) setApps(JSON.parse(appSettings));
        if (dockSize) {
            setSelected(JSON.parse(dockSize));
        } else {
            localStorage.setItem(
                "dockSize",
                JSON.stringify({
                    name: "Medium",
                    value: 3.5,
                })
            );
            setSelected({ name: "Medium", value: 3.5 });
        }

        setStorage(localStorage);
    }, []);

    const [open, setOpen] = useState<boolean>(false);
    const [newAppModalOpen, setNewAppModalOpen] = useState<boolean>(false);

    return (
        <section className="flex flex-row w-screen h-screen overflow-hidden">
            <Head>
                <title>
                    Home{" ⌛"}
                    {new Date().toLocaleTimeString("pl-PL", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </title>
            </Head>
            <Dock
                apps={apps}
                storage={storage}
                setApps={setApps}
                setOpen={setOpen}
                setNewAppOpen={setNewAppModalOpen}
                selected={selected}
            />
            <section className="flex felx-col items-start justify-center bg-[url('/wallpaper.jpg')] bg-cover w-full h-full">
                <SettingsModal
                    open={open}
                    setOpen={setOpen}
                    clock={clock}
                    setClock={setClock}
                    search={search}
                    setSearch={setSearch}
                    weather={weather}
                    setWeather={setWeather}
                    storage={storage}
                    selected={selected}
                    setSelected={setSelected}
                />
                <NewAppModal
                    open={newAppModalOpen}
                    setOpen={setNewAppModalOpen}
                    apps={apps}
                    setApps={setApps}
                />
                <section className="flex flex-col items-start justify-center w-1/4 px-10 py-20 space-y-8">
                    <Clock clock={clock} />
                    <Weather weather={weather} />
                </section>
                <section className="w-3/4 px-10 py-20">
                    <Search
                        placeholder={"Search the web"}
                        searchState={search}
                    />
                </section>
            </section>
        </section>
    );
}
