import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

import Input from "./input";

import { db } from "../utils/db";
import { collection, addDoc, getDocs } from "firebase/firestore";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    setUser: (user: any) => void;
    setLoginOpen: (open: boolean) => void;
};

export default function RegisterModal({
    open,
    setOpen,
    setUser,
    setLoginOpen,
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
            const docRef = await addDoc(collection(db, "users"), {
                name,
                surname,
                email,
                password,
            });
            if (docRef.id) {
                setUser({
                    name,
                    surname,
                    email,
                    password,
                });
                setOpen(false);
            }
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
                                    User Login
                                </Dialog.Title>
                                <section className="flex flex-col items-center justify-center my-4">
                                    <section className="flex flex-col items-center justify-center w-full space-y-3 my-4">
                                        <section className="flex flex-row items-center justify-center w-full space-x-3">
                                            <Input
                                                placeholder="Name"
                                                value={name}
                                                setValue={setName}
                                            />
                                            <Input
                                                placeholder="Surname"
                                                value={surname}
                                                setValue={setSurname}
                                            />
                                        </section>
                                        <Input
                                            value={email}
                                            setValue={setEmail}
                                            placeholder={"Email"}
                                        />
                                        <Input
                                            value={password}
                                            setValue={setPassword}
                                            placeholder={"Password"}
                                        />
                                        <span className="text-gray-400">
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
                                        className="px-3 py-1 mt-4 w-1/3 text-gray-200 bg-gray-600/40 rounded-xl hover:scale-110 hover:shadow-[0_3px_10px_0] hover:shadow-blue-600 hover:bg-blue-600 transition duration-300"
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
