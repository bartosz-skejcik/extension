import Tile from "./Tile";
import { Cog6ToothIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/outline";
import { ItemInterface, ReactSortable } from "react-sortablejs";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
    setOpen: Dispatch<SetStateAction<boolean>>;
    setNewAppOpen: Dispatch<SetStateAction<boolean>>;
    apps: ItemInterface[];
    storage: Storage | undefined;
    setApps: Dispatch<SetStateAction<ItemInterface[]>>;
    selected: { name: string | null };
}

function Dock({
    setOpen,
    setNewAppOpen,
    apps,
    setApps,
    storage,
    selected,
}: Props) {
    const [size, setSize] = useState<number>(0);
    useEffect(() => {
        // save settings to localStorage
        if (storage) {
            storage.setItem("appSettings", JSON.stringify(apps));
        }
    }, [apps, storage]);

    useEffect(() => {
        if (selected.name == "Huge") {
            setSize(4.5);
        } else if (selected.name == "Large") {
            setSize(4);
        } else if (selected.name == "Medium") {
            setSize(3.5);
        } else if (selected.name == "Small") {
            setSize(3);
        } else {
            setSize(3.5);
        }
    }, [selected.name]);

    return (
        <section
            className={
                `flex ` +
                (size > 0 ? `w-[${size}%]` : `w-[4.5%]`) +
                ` h-full items-center justify-between flex-col bg-gray-900 py-6 space-y-6`
            }
        >
            <section className="flex flex-col items-center justify-center">
                <button
                    onClick={() => {
                        window.open("#", "_self");
                        console.log(`w-[${size}%]`);
                    }}
                    className="flex items-center justify-center"
                >
                    <HomeIcon className="p-1 w-8/12 h-8/12 rounded-xl hover:text-blue-600 hover:bg-gray-800/70 transition duration-500 text-gray-500" />
                </button>
            </section>
            <section className="flex flex-col items-center justify-start w-full h-full space-y-4">
                <ReactSortable
                    className="flex flex-col items-center justify-start space-y-4"
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
                    <PlusIcon className="m-2 mx-4 rounded-lg w-11/12 h-11/12 hover:text-blue-600 hover:rotate-180 transition duration-500 text-gray-500" />
                </button>
            </section>
            <section className="flex flex-col items-center justify-center">
                <button
                    onClick={() => setOpen(true)}
                    className="flex items-center justify-center"
                >
                    <Cog6ToothIcon className="w-8/12 h-8/12 rounded-full hover:text-blue-600 hover:rotate-180 transition duration-500 text-gray-500" />
                </button>
            </section>
        </section>
    );
}

export default Dock;
