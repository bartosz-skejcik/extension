/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect } from "react";

import { fbStorage } from "../utils/db";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UserCircleIcon } from "@heroicons/react/24/outline";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    user: any;
    setUser: (user: any) => void;
};

export default function UserModal({ open, setOpen, user, setUser }: Props) {
    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        setUser({});
        window.location.reload();
    };

    const handleUpload = (e: any) => {
        const file = e.target.files[0];
        const storageRef = ref(
            fbStorage,
            `profilePictures/${user.email
                .replace(".", "_")
                .replace("@", "_")}.jpg`
        );
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log("");
        });
        window.location.reload();
    };

    const [userProfilePicture, setUserProfilePicture] =
        React.useState<string>("");

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
                })
                .catch((error) => {
                    // Handle any errors
                });
        }
    }, [user]);

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
                                    User Details
                                </Dialog.Title>
                                <section className="flex w-full flex-row items-center justify-center space-x-4">
                                    {userProfilePicture ? (
                                        <>
                                            <label htmlFor="myImg">
                                                <img
                                                    src={userProfilePicture}
                                                    alt="user profile picture"
                                                    className="w-32 h-32 rounded-[2rem] cursor-pointer hover:scale-95 hover:opacity-40 transition duration-300"
                                                />
                                            </label>
                                            <input
                                                onChange={(e) =>
                                                    handleUpload(e)
                                                }
                                                type="file"
                                                name="myImg"
                                                id="myImg"
                                                className="hidden"
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <label htmlFor="myIcon">
                                                <UserCircleIcon className="w-32 h-32 rounded-full text-gray-200 cursor-pointer hover:scale-95 hover:opacity-40 transition duration-300" />
                                            </label>
                                            <input
                                                onChange={(e) =>
                                                    handleUpload(e)
                                                }
                                                type="file"
                                                name="myIcon"
                                                id="myIcon"
                                                className="hidden"
                                            />
                                        </>
                                    )}
                                    <section className="flex flex-1 flex-col items-center justify-center my-4 space-y-4">
                                        <div className="flex flex-row items-center justify-center w-full space-x-3">
                                            <p className="w-1/2 py-1 px-3 rounded-xl bg-gray-600/40 text-gray-200 text-start">
                                                {user.name}
                                            </p>
                                            <p className="w-1/2 py-1 px-3 rounded-xl bg-gray-600/40 text-gray-200 text-start">
                                                {user.surname}
                                            </p>
                                        </div>
                                        <p className="w-full py-1 px-3 rounded-xl bg-gray-600/40 text-gray-200 text-start">
                                            {user.email}
                                        </p>
                                        <button
                                            onClick={handleLogout}
                                            className="px-3 py-1 mt-4 w-1/3 text-gray-200 bg-gray-600/40 rounded-xl hover:scale-110 hover:shadow-[0_3px_10px_0] hover:shadow-blue-600 hover:bg-blue-600 transition duration-300"
                                        >
                                            Logout
                                        </button>
                                    </section>
                                </section>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
