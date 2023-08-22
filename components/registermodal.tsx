import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

import Input from "./input";

import { db } from "../utils/db";
import { collection, setDoc, getDocs, doc } from "firebase/firestore";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    setUser: (user: any) => void;
    setLoginOpen: (open: boolean) => void;
    theme: {
        name: string;
        values: { bg: string; items: string; text: string };
    };
};

export default function RegisterModal({
    open,
    setOpen,
    setUser,
    setLoginOpen,
    theme,
}: Props) {
    const [name, setName] = React.useState<string>("");
    const [surname, setSurname] = React.useState<string>("");

    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    const [error, setError] = React.useState<string>("");

    const handleRegister = async () => {
        try {
            const user = await getDocs(collection(db, "users"));
            const userExists = user.docs.find(
                (doc) => doc.data().email === email
            );
            if (userExists) {
                setError("User already exists");
                return;
            }
            const docRef = await setDoc(doc(db, "users", email), {
                name,
                surname,
                email,
                password,
            })
                .then(() => {
                    setUser({
                        name,
                        surname,
                        email,
                        password,
                    });
                    setOpen(false);
                })
                .catch((error) => {
                    setError(error);
                });
        } catch (e: any) {
            setError(e.message);
        }
    };

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setOpen(false)}
            >
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
                    <div className="flex items-center justify-center min-h-full p-4 text-center">
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
                                className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform border-2 border-neutral-800 backdrop-blur-md rounded-xl"
                            >
                                <Dialog.Title
                                    as="h3"
                                    className="text-2xl font-semibold leading-6"
                                >
                                    User Login
                                </Dialog.Title>
                                <section className="flex flex-col items-center justify-center my-4">
                                    <section className="flex flex-col items-center justify-center w-full my-4 space-y-3">
                                        <section className="flex flex-row items-center justify-center w-full space-x-3">
                                            <Input
                                                placeholder="Name"
                                                value={name}
                                                setValue={setName}
                                                theme={theme}
                                            />
                                            <Input
                                                placeholder="Surname"
                                                value={surname}
                                                setValue={setSurname}
                                                theme={theme}
                                            />
                                        </section>
                                        <Input
                                            value={email}
                                            setValue={setEmail}
                                            placeholder={"Email"}
                                            theme={theme}
                                        />
                                        <Input
                                            value={password}
                                            setValue={setPassword}
                                            placeholder={"Password"}
                                            theme={theme}
                                        />
                                        <span className="text-gray-500">
                                            {"Already have an account? "}
                                            <button
                                                className="text-blue-500"
                                                onClick={() => {
                                                    setLoginOpen(true);
                                                    setOpen(false);
                                                }}
                                            >
                                                Login
                                            </button>
                                        </span>
                                        {error && (
                                            <p className="text-red-500">
                                                {error}
                                            </p>
                                        )}
                                    </section>
                                    <button
                                        onClick={handleRegister}
                                        style={{
                                            backgroundColor:
                                                theme.values &&
                                                theme.values.items,
                                            color:
                                                theme.values &&
                                                theme.values.text,
                                        }}
                                        className="px-3 py-1 mt-4 w-1/3 rounded-xl hover:scale-110 hover:shadow-[0_3px_10px_0] hover:shadow-blue-600 hover:bg-blue-600 transition duration-300"
                                    >
                                        Register
                                    </button>
                                </section>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
