/* eslint-disable @next/next/no-img-element */
import { MinusIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction, useState } from "react";
import { ItemInterface } from "react-sortablejs";

interface Props {
    icon: string;
    href: string;
    apps: ItemInterface[];
    setApps: Dispatch<SetStateAction<ItemInterface[]>>;
    theme: { name: string; values: { bg: string; items: string } };
}

function Tile({ icon, href, apps, setApps, theme }: Props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="relative"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <a
                href={href}
                className="flex p-2 mx-2 items-center justify-center rounded-xl hover:bg-gray-700 hover:rotate-12 transition duration-500"
                style={{
                    backgroundColor: theme.values && theme.values.items,
                }}
            >
                <img
                    alt="icon"
                    src={icon}
                    className="block max-w-8 max-h-8 w-full h-full aspect-square"
                />
            </a>
            <button
                className={`${
                    isHovered ? "block" : "invisible"
                } absolute -top-2 -right-1`}
                onClick={() => {
                    setApps(apps.filter((app) => app.href !== href));
                }}
            >
                <MinusIcon className="w-5 h-5 rounded-full text-black bg-red-500 transition duration-500" />
            </button>
        </div>
    );
}

export default Tile;
