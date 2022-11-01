import { Switch } from "@headlessui/react";

type Props = {
    enabled: boolean;
    runFunction: any;
};

export default function SwitchButton({ enabled, runFunction }: Props) {
    return (
        <Switch
            checked={enabled}
            onChange={runFunction}
            className={`${
                enabled ? "bg-blue-600" : "bg-gray-400"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
            <span className="sr-only">Enable option</span>
            <span
                className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
        </Switch>
    );
}
