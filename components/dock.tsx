/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Tile from "./tile";
import {
    Cog6ToothIcon,
    HomeIcon,
    PlusIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";
import { ItemInterface, ReactSortable } from "react-sortablejs";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { fbStorage } from "../utils/db/index";
import { ref, getDownloadURL } from "firebase/storage";

interface Props {
    setOpen: Dispatch<SetStateAction<boolean>>;
    setNewAppOpen: Dispatch<SetStateAction<boolean>>;
    apps: ItemInterface[];
    storage: Storage | undefined;
    setApps: Dispatch<SetStateAction<ItemInterface[]>>;
    selected: { name: string | null; value: number };
    setLoginModalOpen: Dispatch<SetStateAction<boolean>>;
    setUserModalOpen: Dispatch<SetStateAction<boolean>>;
    theme: { name: string; values: { bg: string; items: string } };
    user: any;
}

function Dock({
    setOpen,
    setNewAppOpen,
    apps,
    setApps,
    storage,
    selected,
    setLoginModalOpen,
    setUserModalOpen,
    theme,
    user,
}: Props) {
    useEffect(() => {
        // save settings to localStorage
        if (storage) {
            storage.setItem("appSettings", JSON.stringify(apps));
        }
    }, [apps, storage]);

    const [userProfilePicture, setUserProfilePicture] = useState<string>("");

    useEffect(() => {
        if (user.email) {
            // get the user's profile picture from firebase storage
            const storageRef = ref(
                fbStorage,
                `profilePictures/${user.email
                    .replace(".", "_")
                    .replace("@", "_")}.jpg`
            );
            getDownloadURL(storageRef)
                .then((url) => {
                    // `url` is the download URL for 'images/stars.jpg'

                    // This can be downloaded directly:
                    const xhr = new XMLHttpRequest();
                    xhr.responseType = "blob";
                    xhr.onload = (event) => {
                        const blob = xhr.response;
                    };
                    xhr.open("GET", url);
                    xhr.send();

                    setUserProfilePicture(url);
                    console.log(url);
                })
                .catch((error) => {
                    // Handle any errors
                });
        }
    }, [user]);

    return (
        <section
            className={`flex h-full items-center justify-between flex-col py-6 space-y-6`}
            style={{
                width: selected.value + "%",
                backgroundColor: theme.values && theme.values.bg,
            }}
        >
            <section className="flex flex-col items-center justify-center">
                <button
                    onClick={() => {
                        window.open("#", "_self");
                    }}
                    className="flex items-center justify-center"
                >
                    <HomeIcon className="p-1 w-8/12 h-8/12 rounded-xl hover:text-blue-600 hover:bg-gray-800/70 transition duration-500 text-gray-500" />
                </button>
            </section>
            <section
                className={`flex flex-col items-center justify-start w-full h-full space-y-4`}
            >
                <ReactSortable
                    className={`flex flex-col items-center justify-start space-y-4`}
                    list={apps}
                    setList={setApps}
                    animation={600}
                    swapThreshold={1}
                    easing="cubic-bezier(0, -0.6, 0, 1.6)"
                    dragClass="contents"
                    ghostClass="block"
                    chosenClass="block"
                >
                    {apps.map((item) => (
                        <Tile
                            key={item.id}
                            href={item.href}
                            icon={item.icon}
                            apps={apps}
                            setApps={setApps}
                            theme={theme}
                        />
                    ))}
                </ReactSortable>
                <button
                    onClick={() => setNewAppOpen(true)}
                    className="flex items-center justify-center"
                >
                    <PlusIcon className="m-2 mx-4 rounded-lg w-11/12 h-11/12 hover:text-blue-600 hover:scale-90 hover:rotate-180 transition duration-500 text-gray-500" />
                </button>
            </section>
            <section className="flex flex-col items-center justify-center space-y-4">
                <button
                    onClick={() => setOpen(true)}
                    className="flex items-center justify-center"
                >
                    <Cog6ToothIcon className="w-8/12 h-8/12 rounded-full hover:text-blue-600 hover:scale-90 hover:rotate-180 transition duration-500 text-gray-500" />
                </button>
                <button
                    onClick={() => {
                        // check if user is logged in
                        const user: any = JSON.parse(
                            localStorage.getItem("user") || "{}"
                        );
                        if (storage && user.email) {
                            // if yes, open user modal
                            setUserModalOpen(true);
                        } else {
                            // if no, open login modal
                            setLoginModalOpen(true);
                        }
                    }}
                    className="flex items-center justify-center"
                >
                    {userProfilePicture ? (
                        <img
                            src={userProfilePicture}
                            className="w-10 h-10 rounded-full hover:scale-95 transition duration-500"
                        />
                    ) : (
                        <UserCircleIcon className="w-8/12 h-8/12 rounded-full hover:text-blue-600 hover:scale-95 transition duration-500 text-gray-500" />
                    )}
                </button>
            </section>
        </section>
    );
}

export default Dock;
