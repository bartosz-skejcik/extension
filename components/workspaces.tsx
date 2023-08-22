import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

type Props = {
    workspaces: any;
    setOpen: (open: boolean) => void;
};

export default function Workspaces({ workspaces, setOpen }: Props) {
    return (
        <section className="flex flex-col items-start justify-start py-4 px-4 w-full h-full  backdrop-blur-md bg-gray-800/40 rounded-xl">
            <h1 className="px-4 py-2 text-left text-2xl font-bold text-gray-300">
                Workspaces
            </h1>
            <button
                onClick={() => setOpen(true)}
                className="flex flex-row items-center justify-center w-full space-x-2 rounded-xl bg-gray-900/50 mx-2 py-1 font-medium text-gray-300 hover:bg-gray-800/50 transition duration-300"
            >
                <PlusCircleIcon className="w-6 h-6 block text-gray-300" />
                <span className="text-gray-300">Add workspace</span>
            </button>
            <div className="mx-auto w-full">
                {Object.keys(workspaces).map(
                    (workspace: any, index: number) => (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="m-2 flex w-full justify-between rounded-xl bg-gray-900/50 px-4 py-2 text-left text-sm font-medium text-gray-300 hover:bg-gray-800/50 transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <div className="flex flex-row space-x-2 items-center justify-center">
                                            <div className="rounded-full flex items-center justify-center bg-gray-400 text-gray-800 w-6 h-6">
                                                <span>
                                                    {workspace[0].toUpperCase()}
                                                </span>
                                            </div>
                                            <span>
                                                {workspace
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    workspace.slice(1)}
                                            </span>
                                        </div>
                                        <ChevronUpIcon
                                            className={`${
                                                open
                                                    ? ""
                                                    : "rotate-180 transform"
                                            } h-5 w-5 text-gray-300`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-3 pb-2 text-sm text-gray-200">
                                        <ul className="space-y-1">
                                            {workspaces[workspace].map(
                                                (app: any, index: number) => (
                                                    <a
                                                        key={index}
                                                        href={app.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex items-center space-x-5 px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:scale-[1.01] hover:bg-gray-900/50 transition duration-300"
                                                    >
                                                        <span>{app.name}</span>
                                                        <span className="text-gray-400">
                                                            {app.link}
                                                        </span>
                                                    </a>
                                                )
                                            )}
                                        </ul>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    )
                )}
            </div>
        </section>
    );
}
