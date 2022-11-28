import Search from "../components/search";
import Weather from "../components/weather";
import Clock from "../components/clock";
import Dock from "../components/dock";
import SettingsModal from "../components/settingsmodal";
import NewAppModal from "../components/newappmodal";

import { ItemInterface } from "react-sortablejs";
import { useState, useEffect } from "react";
import Head from "next/head";
import Workspaces from "../components/workspaces";
import News from "../components/news";
import WorldCup from "../components/worldcup";

export default function Home() {
    const [clock, setClock] = useState(true);
    const [search, setSearch] = useState(true);
    const [weather, setWeather] = useState(false);
    const [news, setNews] = useState(false);
    const [worldcup, setWorldCup] = useState(true);
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
    const [bgUrl, setBgUrl] = useState("");
    const [workspaces, setWorkspaces] = useState<any>();
    const [workspaceModalOpen, setWorkspaceModalOpen] = useState(false);

    useEffect(() => {
        // get settings from localStorage
        const weatherSettings = localStorage.getItem("weatherSettings");
        const clockSettings = localStorage.getItem("clockSettings");
        const searchSettings = localStorage.getItem("searchSettings");
        const newsSettings = localStorage.getItem("newsSettings");
        const worldcupSettings = localStorage.getItem("worldcupSettings");
        const appSettings = localStorage.getItem("appSettings");
        const dockSize = localStorage.getItem("dockSize");
        const wallpaperUrl = localStorage.getItem("wallpaper");
        const workspacesSettings = localStorage.getItem("workspaces");

        // set settings
        if (weatherSettings) setWeather(JSON.parse(weatherSettings));
        if (clockSettings) setClock(JSON.parse(clockSettings));
        if (searchSettings) setSearch(JSON.parse(searchSettings));
        if (newsSettings) setNews(JSON.parse(newsSettings));
        if (worldcupSettings) setWorldCup(JSON.parse(worldcupSettings));
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
        if (wallpaperUrl) {
            setBgUrl(wallpaperUrl);
        } else {
            localStorage.setItem(
                "wallpaper",
                "https://wallpaperaccess.com/full/2180654.jpg"
            );
            setBgUrl("https://wallpaperaccess.com/full/2180654.jpg");
        }
        if (workspacesSettings) {
            setWorkspaces(JSON.parse(workspacesSettings));
        }

        setStorage(localStorage);
    }, []);

    const [open, setOpen] = useState<boolean>(false);
    const [newAppModalOpen, setNewAppModalOpen] = useState<boolean>(false);

    return (
        <section className="flex flex-row w-screen max-h-screen h-screen overflow-x-hidden overflow-y-hidden">
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
            <section
                className={`flex felx-col items-start justify-center bg-cover w-full h-full`}
                style={{ backgroundImage: `url(${bgUrl})` }}
            >
                <SettingsModal
                    open={open}
                    setOpen={setOpen}
                    clock={clock}
                    setClock={setClock}
                    search={search}
                    setSearch={setSearch}
                    weather={weather}
                    setWeather={setWeather}
                    news={news}
                    setNews={setNews}
                    storage={storage}
                    selected={selected}
                    setSelected={setSelected}
                    bgUrl={bgUrl}
                    setBgUrl={setBgUrl}
                />
                <NewAppModal
                    open={newAppModalOpen}
                    setOpen={setNewAppModalOpen}
                    apps={apps}
                    setApps={setApps}
                />
                <section className="flex flex-col items-center justify-start w-1/4 px-10 py-20 space-y-8 h-full overflow-y-scroll">
                    <Clock clock={clock} />
                    <Weather weather={weather} />
                </section>
                <section className="flex flex-col items-center justify-start w-2/4 px-10 py-20 h-full">
                    <Search
                        placeholder={"Search the web"}
                        searchState={search}
                    />
                    {workspaces && (
                        <Workspaces
                            setOpen={setWorkspaceModalOpen}
                            workspaces={workspaces}
                        />
                    )}
                    <News news={news} />
                </section>
                <section className="flex flex-col items-center justify-start w-1/4 px-10 py-20 space-y-8 h-full overflow-y-scroll">
                    <WorldCup worldcup={worldcup} />
                </section>
            </section>
        </section>
    );
}
