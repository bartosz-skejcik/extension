import Tile from "./tile";
import {
    Cog6ToothIcon,
    HomeIcon,
    PlusIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";
import { ItemInterface, ReactSortable } from "react-sortablejs";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
    setOpen: Dispatch<SetStateAction<boolean>>;
    setNewAppOpen: Dispatch<SetStateAction<boolean>>;
    apps: ItemInterface[];
    storage: Storage | undefined;
    setApps: Dispatch<SetStateAction<ItemInterface[]>>;
    selected: { name: string | null; value: number };
}

function Dock({
    setOpen,
    setNewAppOpen,
    apps,
    setApps,
    storage,
    selected,
}: Props) {
    useEffect(() => {
        // save settings to localStorage
        if (storage) {
            storage.setItem("appSettings", JSON.stringify(apps));
        }
    }, [apps, storage]);

    return (
        <section
            className={`flex h-full items-center justify-between flex-col bg-gray-900 py-6 space-y-6`}
            style={{
                width: selected.value + "%",
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
                    animation={200}
                    swapThreshold={1}
                    easing="cubic-bezier(1, 0, 0, 1)"
                >
                    {apps.map((item) => (
                        <Tile
                            key={item.id}
                            href={item.href}
                            icon={item.icon}
                            apps={apps}
                            setApps={setApps}
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
                <button className="flex items-center justify-center">
                    <UserCircleIcon className="w-8/12 h-8/12 rounded-full hover:text-blue-600 hover:scale-95 transition duration-500 text-gray-500" />
                </button>
            </section>
        </section>
    );
}

export default Dock;
