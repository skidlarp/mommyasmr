function V(o){window.enmity.plugins.registerPlugin(o)}
const r={
    byProps:(...o)=>window.enmity.modules.filters.byProps(...o),
    byName:(o,n)=>window.enmity.modules.filters.byName(o,n),
    byTypeName:(o,n)=>window.enmity.modules.filters.byTypeName(o,n),
    byDisplayName:(o,n)=>window.enmity.modules.filters.byDisplayName(o,n)
};
function D(...o){return window.enmity.modules.bulk(...o)}
function c(...o){return window.enmity.modules.getByProps(...o)}
const t=window.enmity.modules.common.React;
const T=window.enmity.modules.common.StyleSheet;
const l=window.enmity.modules.common.ColorMap;
const settings = {
    platform: "desktop",
};

function getPlatformSettings() {
    switch (settings.platform) {
        case "desktop":
            return { browser: "Discord Client" };
        case "web":
            return { browser: "Chrome" };
        case "mobile":
            return { browser: "Discord iOS" };
        case "embedded":
            return { browser: "Discord Embedded" };
        default:
            return { browser: "Unknown" };
    }
}

var PlatformSpoofer = {
    name: "PlatformSpoofer",
    version: "1.0.0",
    description: "Spoof your platform or device",
    authors: [{ name: "$Bandwidth", id: "123456789012345678" }],
    onStart() {
        const patcher = window.enmity.patcher.create("PlatformSpoofer");
        patcher.before("_doIdentify", window, ([arg]) => {
            if (arg && arg.properties) {
                Object.assign(arg.properties, getPlatformSettings());
            }
        });
    },
    onStop() {
        window.enmity.patcher.unpatchAll("PlatformSpoofer");
    },
    settings,
};

V(PlatformSpoofer);
