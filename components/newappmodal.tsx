import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ItemInterface } from "react-sortablejs";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    apps: ItemInterface[];
    setApps: (apps: ItemInterface[]) => void;
    user: any;
    theme: {
        name: string;
        values: { bg: string; items: string; text: string };
    };
};

export default function NewAppModal({
    open,
    setOpen,
    apps,
    setApps,
    user,
    theme,
}: Props) {
    const [error, setError] = useState("");
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
                            <Dialog.Panel
                                style={{
                                    backgroundColor:
                                        theme.values && theme.values.bg,
                                    color: theme.values && theme.values.text,
                                }}
                                className="w-full max-w-md transform overflow-hidden backdrop-blur-md rounded-xl p-6 text-left align-middle transition-all"
                            >
                                <Dialog.Title
                                    as="h3"
                                    className="text-2xl font-semibold leading-6"
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
                                            const icon = formData.get("icon")
                                                ? formData
                                                      .get("icon")
                                                      ?.toString()
                                                : `https://www.google.com/s2/favicons?domain=${href}&sz=256`;
                                            if (href) {
                                                if (
                                                    !(apps.length >= 8) ||
                                                    user.email ==
                                                        "bartek@paczesny.pl"
                                                ) {
                                                    setApps([
                                                        ...apps,
                                                        {
                                                            id: apps.length + 1,
                                                            href: href.toString(),
                                                            icon: icon,
                                                        },
                                                    ]);
                                                    setError("");
                                                    closeModal();
                                                } else {
                                                    setError(
                                                        "Nie można dodać więcej skrótów!"
                                                    );
                                                }
                                            } else {
                                                setError(
                                                    "Prosze podać adres strony!"
                                                );
                                            }
                                        }}
                                    >
                                        <div className="flex flex-col items-center justify-center space-y-2 mt-4">
                                            <input
                                                type="text"
                                                ref={(input) =>
                                                    input && input.focus()
                                                }
                                                name="href"
                                                id="href"
                                                placeholder="URL"
                                                className={`w-full px-4 py-2 backdrop-blur-md rounded-md placeholder:text-[${theme.values.text}]`}
                                                style={{
                                                    backgroundColor:
                                                        theme.values &&
                                                        theme.values.items,
                                                }}
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center space-y-2 mt-4">
                                            <input
                                                type="text"
                                                name="icon"
                                                id="icon"
                                                placeholder="Icon (optional)"
                                                className={`w-full px-4 py-2 backdrop-blur-md rounded-md placeholder:text-[${theme.values.text}]`}
                                                style={{
                                                    backgroundColor:
                                                        theme.values &&
                                                        theme.values.items,
                                                }}
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center space-y-2 mt-4 text-red-500">
                                            {error}
                                        </div>
                                        <div className="flex items-center justify-center mt-4">
                                            <button
                                                type="submit"
                                                className="px-4 py-2 bg-blue-500/80 backdrop-blur-md rounded-md"
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
