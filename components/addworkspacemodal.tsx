type Props = {
    setWorkspaces: any;
    workspaces: any;
    storage: Storage | undefined;
};

export default function AddWorkspaceModal({
    setWorkspaces,
    workspaces,
    storage,
}: Props) {
    const handleAddWorkspace = async () => {
        // workspaces is an object add a new one to it with name entertainment
        // and an empty array of apps
        await setWorkspaces(
            workspaces,
            (workspaces.entertainment = [
                {
                    name: "Youtube",
                    link: "https://youtube.com",
                },
                {
                    name: "Netflix",
                    link: "https://netflix.com",
                },
            ])
        );
        storage?.setItem("workspaces", JSON.stringify(workspaces));
    };

    return <section></section>;
}
