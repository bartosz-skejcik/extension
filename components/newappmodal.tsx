import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ItemInterface } from "react-sortablejs";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    apps: ItemInterface[];
    setApps: (apps: ItemInterface[]) => void;
};

export default function NewAppModal({ open, setOpen, apps, setApps }: Props) {
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
                                    Add new App
                                </Dialog.Title>
                                <section className="flex flex-col items-center justify-center space-y-4 mt-4">
                                    {/* create a form for creating a new app */}
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            const form =
                                                e.target as HTMLFormElement;
                                            const formData = new FormData(form);
                                            const href = formData.get("href");
                                            const icon = formData.get("icon");
                                            if (href && icon) {
                                                setApps([
                                                    ...apps,
                                                    {
                                                        id: apps.length + 1,
                                                        href: href.toString(),
                                                        icon: icon.toString(),
                                                    },
                                                ]);
                                            }
                                            closeModal();
                                        }}
                                    >
                                        <div className="flex flex-col items-center justify-center space-y-2 mt-4">
                                            <label
                                                htmlFor="href"
                                                className="text-gray-200"
                                            >
                                                URL
                                            </label>
                                            <input
                                                type="text"
                                                name="href"
                                                id="href"
                                                className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center space-y-2 mt-4">
                                            <label
                                                htmlFor="icon"
                                                className="text-gray-200"
                                            >
                                                Icon
                                            </label>
                                            <input
                                                type="text"
                                                name="icon"
                                                id="icon"
                                                className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md"
                                            />
                                        </div>
                                        <div className="flex items-center justify-center mt-4">
                                            <button
                                                type="submit"
                                                className="px-4 py-2 text-gray-900 bg-gray-200 rounded-md"
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </form>
                                </section>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}