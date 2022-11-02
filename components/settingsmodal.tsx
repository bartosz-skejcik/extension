import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
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
    storage: Storage | undefined;
    selected: { name: string | null; value: number };
    setSelected: (value: { name: string | null; value: number }) => void;
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
    storage,
    selected,
    setSelected,
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
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden backdrop-blur-md bg-gray-900/90 shadow-[0_0_3px_1px] shadow-gray-300 rounded-3xl p-6 text-left align-middle transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-2xl font-semibold leading-6 text-gray-200"
                                >
                                    User settings
                                </Dialog.Title>
                                <section className="flex flex-col items-center justify-center space-y-4 mt-4">
                                    <div className="w-full flex flex-row items-center justify-between">
                                        <h3 className="text-xl text-gray-100">
                                            Dock size
                                        </h3>
                                        <ListboxSelect
                                            storage={storage}
                                            selected={selected}
                                            setSelected={setSelected}
                                        />
                                    </div>
                                    <div className="w-full flex flex-row items-center justify-between">
                                        <h3 className="text-xl text-gray-100">
                                            Clock
                                        </h3>
                                        <SwitchButton
                                            enabled={clock}
                                            runFunction={() => {
                                                setClock(!clock);
                                                storage &&
                                                    storage.setItem(
                                                        "clockSettings",
                                                        JSON.stringify(!clock)
                                                    );
                                            }}
                                        />
                                    </div>
                                    <div className="w-full flex flex-row items-center justify-between">
                                        <h3 className="text-xl text-gray-100">
                                            Search
                                        </h3>
                                        <SwitchButton
                                            enabled={search}
                                            runFunction={() => {
                                                setSearch(!search);
                                                storage &&
                                                    storage.setItem(
                                                        "searchSettings",
                                                        JSON.stringify(!search)
                                                    );
                                            }}
                                        />
                                    </div>
                                    <div className="w-full flex flex-row items-center justify-between">
                                        <h3 className="text-xl text-gray-100">
                                            Weather
                                        </h3>
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
                                </section>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
