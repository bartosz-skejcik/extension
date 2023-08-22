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
import UserModal from "../components/usermodal";
import LoginModal from "../components/loginmodal";
import RegisterModal from "../components/registermodal";
import { db } from "../utils/db";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Home() {
    const [clock, setClock] = useState<boolean>();
    const [search, setSearch] = useState<boolean>();
    const [weather, setWeather] = useState<boolean>();
    const [news, setNews] = useState<boolean>();
    const [greeting, setGreeting] = useState<boolean>();
    const [storage, setStorage] = useState<Storage>();

    const [user, setUser] = useState<any>({});
    const [userModalOpen, setUserModalOpen] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

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
        name: string;
        value: number;
    }>({
        name: "Medium",
        value: 3.5,
    });
    const [searchEngine, setSearchEngine] = useState<{
        name: string;
        value: string;
    }>({
        name: "Google",
        value: "https://google.com/search?q=",
    });
    const [theme, setTheme] = useState<{
        name: string;
        values: { bg: string; items: string; text: string };
    }>({
        name: "Dark Blue",
        values: {
            bg: "#111827",
            items: "#1f2937",
            text: "#9ca3af",
        },
    });
    const [bgUrl, setBgUrl] = useState("");
    const [workspaces, setWorkspaces] = useState<any>();
    const [workspaceModalOpen, setWorkspaceModalOpen] = useState(false);

    useEffect(() => {
        // get settings from localStorage
        const currentUser = localStorage.getItem("user") || "{}";

        // if there is a user object in localStorage, set it to the user state
        // if not, create a new user object and set it to the user state
        const userObj = JSON.parse(currentUser);
        if (userObj.email) {
            console.log("user found");
            const docRef = getDoc(doc(db, "users", userObj.email));
            // set the user state to the user object from firebase
            docRef.then((doc) => {
                if (doc.exists()) {
                    setUser(doc.data());
                    const {
                        weather,
                        clock,
                        search,
                        news,
                        apps,
                        dockSize,
                        searchEngine,
                        wallpaper,
                        workspaces,
                        greeting,
                        theme,
                    } = doc.data().settings;

                    // set settings
                    if (weather) setWeather(weather);
                    if (clock) setClock(clock);
                    if (search) setSearch(search);
                    if (news) setNews(news);
                    if (greeting) setGreeting(greeting);
                    if (apps) setApps(apps);
                    if (searchEngine) {
                        setSearchEngine(searchEngine);
                    } else {
                        setSearchEngine({
                            name: "Google",
                            value: "https://google.com/search?q=",
                        });
                    }

                    if (theme) {
                        setTheme(theme);
                    } else {
                        setTheme({
                            name: "Dark Blue",
                            values: {
                                bg: "#111827",
                                items: "#1f2937",
                                text: "#9ca3af",
                            },
                        });
                    }

                    if (dockSize) {
                        setSelected(dockSize);
                    } else {
                        setSelected({ name: "Medium", value: 3.5 });
                    }

                    if (wallpaper) {
                        setBgUrl(wallpaper);
                    } else {
                        setBgUrl(
                            "https://wallpaperaccess.com/full/2180654.jpg"
                        );
                    }

                    if (workspaces) {
                        setWorkspaces(workspaces);
                    }
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            });
        }

        if (!JSON.parse(currentUser).settings) {
            console.log("no user settings");
            // get settings from localStorage
            const weatherSettings = localStorage.getItem("weatherSettings");
            const clockSettings = localStorage.getItem("clockSettings");
            const searchSettings = localStorage.getItem("searchSettings");
            const newsSettings = localStorage.getItem("newsSettings");
            const appSettings = localStorage.getItem("appSettings");
            const dockSize = localStorage.getItem("dockSize");
            const searchEngineSetting = localStorage.getItem("searchEngine");
            const wallpaperUrl = localStorage.getItem("wallpaper");
            const workspacesSettings = localStorage.getItem("workspaces");
            const greetingSettings = localStorage.getItem("greeting");

            // set settings
            if (weatherSettings) setWeather(JSON.parse(weatherSettings));
            if (clockSettings) setClock(JSON.parse(clockSettings));
            if (searchSettings) setSearch(JSON.parse(searchSettings));
            if (newsSettings) setNews(JSON.parse(newsSettings));
            if (greetingSettings) setGreeting(JSON.parse(greetingSettings));
            if (appSettings) setApps(JSON.parse(appSettings));
            if (searchEngineSetting) {
                setSearchEngine(JSON.parse(searchEngineSetting));
            } else {
                localStorage.setItem(
                    "searchEngine",
                    JSON.stringify({
                        name: "Google",
                        value: "https://google.com/search?q=",
                    })
                );
                setSearchEngine({
                    name: "Google",
                    value: "https://google.com/search?q=",
                });
            }
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
        }

        setStorage(localStorage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (user.email) {
            localStorage.setItem("user", JSON.stringify(user));
        }
    }, [user]);

    // on any setting change write it to the user object and send it to firebase
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
        if (user.email) {
            const userObj = {
                ...currentUser,
                settings: {
                    weather: weather || false,
                    clock: clock || false,
                    search: search || false,
                    news: news || false,
                    greeting: greeting || false,
                    apps: apps,
                    dockSize: selected || false,
                    searchEngine: searchEngine,
                    wallpaper: bgUrl,
                    theme: theme,
                },
            };
            setUser(userObj);
            storage?.setItem("user", JSON.stringify(userObj));
            const docRef = setDoc(doc(db, "users", user.email), userObj);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        weather,
        clock,
        search,
        news,
        apps,
        selected,
        searchEngine,
        bgUrl,
        greeting,
        theme,
        user.email,
    ]);

    const [open, setOpen] = useState<boolean>(false);
    const [newAppModalOpen, setNewAppModalOpen] = useState<boolean>(false);

    return (
        <section className="flex flex-row w-screen h-screen max-h-screen overflow-x-hidden overflow-y-hidden">
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
                setUserModalOpen={setUserModalOpen}
                setLoginModalOpen={setLoginModalOpen}
                theme={theme}
                user={user}
            />
            <section
                className={`flex flex-row items-start justify-center bg-cover w-full h-full`}
                style={{ backgroundImage: `url(${bgUrl})` }}
            >
                <SettingsModal
                    open={open}
                    setOpen={setOpen}
                    clock={clock || false}
                    setClock={setClock}
                    search={search || false}
                    setSearch={setSearch}
                    weather={weather || false}
                    setWeather={setWeather}
                    news={news || false}
                    setNews={setNews}
                    greeting={greeting || false}
                    setGreeting={setGreeting}
                    storage={storage}
                    selected={selected}
                    setSelected={setSelected}
                    searchEngine={searchEngine}
                    setSearchEngine={setSearchEngine}
                    theme={theme}
                    setTheme={setTheme}
                    bgUrl={bgUrl}
                    setBgUrl={setBgUrl}
                />
                <NewAppModal
                    open={newAppModalOpen}
                    setOpen={setNewAppModalOpen}
                    apps={apps}
                    setApps={setApps}
                    user={user}
                    theme={theme}
                />
                <UserModal
                    open={userModalOpen}
                    setOpen={setUserModalOpen}
                    user={user}
                    setUser={setUser}
                    theme={theme}
                />
                <LoginModal
                    open={loginModalOpen}
                    setOpen={setLoginModalOpen}
                    setUser={setUser}
                    setRegisterOpen={setRegisterModalOpen}
                    theme={theme}
                />
                <RegisterModal
                    open={registerModalOpen}
                    setOpen={setRegisterModalOpen}
                    setUser={setUser}
                    setLoginOpen={setLoginModalOpen}
                    theme={theme}
                />
                <section className="flex flex-col items-center justify-start w-1/4 h-full p-10 space-y-8 overflow-y-scroll">
                    <Clock
                        clock={clock || false}
                        greeting={greeting || false}
                        theme={theme}
                    />
                    <Weather weather={weather || false} theme={theme} />
                </section>
                <section className="flex flex-col items-center justify-start w-3/4 h-full p-10">
                    <Search
                        placeholder={"Search the web"}
                        searchState={search || false}
                        searchEngine={searchEngine}
                        theme={theme}
                    />
                    {workspaces && (
                        <Workspaces
                            setOpen={setWorkspaceModalOpen}
                            workspaces={workspaces}
                        />
                    )}
                    <News news={news || false} theme={theme} />
                </section>
            </section>
        </section>
    );
}
