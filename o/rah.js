const definePlugin = require("@utils/types").default;
const { StartAt, OptionType } = require("@utils/types");
const { Settings } = require("@api/Settings");

module.exports = definePlugin({
    name: "DeviceSpoof",
    description: "This plugin spoofs the device you are on while connecting to the discord gateway",
    authors: [
        {
            id: "1162674474496307210",
            name: "EinTim",
        },
    ],
    startAt: StartAt.Init, // we need this so we have our patches applied before the fast connect
    patches: [
        {
            find: "this.handleIdentify()",
            replacement: {
                match: /let (.)=this\.handleIdentify\(\);/g, // there are two occurrences of this, one on fast connect and one on the normal connect
                replace: "$&;$1.properties.browser=$self.getBrowserType();",
            }
        }
    ],
    getBrowserType() {
        return Settings.plugins.DeviceSpoof.Device;
    },
    options: {
        Device: {
            type: OptionType.SELECT,
            description: "The device this session will identify as",
            restartNeeded: true,
            default: "Discord Embedded", // Automatically use Console (Discord Embedded)
            options: [
                { label: "Desktop", value: "Discord Client", default: true },
                { label: "Browser", value: "Chrome" },
                { label: "Mobile", value: "Discord Android" },
                { label: "Console", value: "Discord Embedded" }
            ],
        },
    },
});
