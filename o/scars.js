function V(o){window.enmity.plugins.registerPlugin(o)}
const r={
    byProps:(...o)=>window.enmity.modules.filters.byProps(...o),
    byName:(o,n)=>window.enmity.modules.filters.byName(o,n),
    byTypeName:(o,n)=>window.enmity.modules.filters.byTypeName(o,n),
    byDisplayName:(o,n)=>window.enmity.modules.filters.byDisplayName(o,n)
};
function D(...o){return window.enmity.modules.bulk(...o)}
function c(...o){return window.enmity.modules.getByProps(...o)}
const M=window.enmity.modules.common,
      O=window.enmity.modules.common.Constants,
      f=window.enmity.modules.common.Clipboard;
const t=window.enmity.modules.common.React;
const T=window.enmity.modules.common.StyleSheet,
      l=window.enmity.modules.common.ColorMap;
const v=window.enmity.modules.common.Toasts;

const PlatformSpoofer = {
    name: "PlatformSpoofer",
    version: "1.0.0",
    description: "Spoof as Console platform",
    authors: [{ name: "$Bandwidth", id: "123456789012345678" }],
    onStart() {
        const patcher = window.enmity.patcher.create("PlatformSpoofer");
        patcher.before("_doIdentify", window, ([arg]) => {
            if (arg && arg.properties) {
                arg.properties.browser = "Console";
            }
        });
    },
    onStop() {
        window.enmity.patcher.unpatchAll("PlatformSpoofer");
    },
};

V(PlatformSpoofer);
