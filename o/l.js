function V(o) { window.enmity.plugins.registerPlugin(o); }

const r = {
    byProps: (...o) => window.enmity.modules.filters.byProps(...o),
    byName: (o, n) => window.enmity.modules.filters.byName(o, n),
    byTypeName: (o, n) => window.enmity.modules.filters.byTypeName(o, n),
    byDisplayName: (o, n) => window.enmity.modules.filters.byDisplayName(o, n)
};

function D(...o) { return window.enmity.modules.bulk(...o); }

function c(...o) { return window.enmity.modules.getByProps(...o); }

const M = window.enmity.modules.common;
const O = window.enmity.modules.common.Constants;
const f = window.enmity.modules.common.Clipboard;
const t = window.enmity.modules.common.React;
const v = window.enmity.modules.common.Toasts;

const T = window.enmity.modules.common.StyleSheet;
const l = window.enmity.modules.common.ColorMap;

const definePlugin = require("@utils/types").default;
const { StartAt, OptionType } = require("@utils/types");
const { Settings } = require("@api/Settings");

const E = {
    name: "DeviceSpoof",
    version: "1.0.0",
    description: "This plugin spoofs the device you are on while connecting to the discord gateway",
    authors: [
        {
            id: "1162674474496307210",
            name: "EinTim",
        },
    ],
    onStart() {
        const u = window.enmity.patcher.create(E.name);

        u.before(k, "openLazy", (o, [n, i, m]) => {
            const y = m == null ? void 0 : m.message;
            if (i !== "MessageLongPressActionSheet" || !y || !n) return;
            n.then(I => {
                const L = u.after(I, "default", (ee, oe, p) => {
                    t.useEffect(() => L, []);
                    const g = z(p, s => {
                        var h, b, S, C;
                        return ((b = (h = s == null ? void 0 : s[0]) == null ? void 0 : h.type) == null ? void 0 : b.name) === "ButtonRow" &&
                            ((C = (S = s == null ? void 0 : s[0]) == null ? void 0 : S.props) == null ? void 0 : C.iconSource) === 173;
                    });
                    if (!g) return p;
                    const x = () => t.createElement(Q, {
                        initialRouteName: "RawPage",
                        goBackOnBackPress: true,
                        screens: { RawPage: { title: "ViewRaw", headerLeft: q(() => R.pop()), render: () => t.createElement(j, { message: y }) } }
                    });
                    g.push(t.createElement(Y, { label: "View Raw", icon: a("ic_chat_bubble_16px"), onPress: () => { k.hideActionSheet(), R.push(x); } }));
                });
            });
        });
    },
    onStop() {
        window.enmity.patcher.unpatchAll();
    }
};

window.enmity.plugins.registerPlugin(E);

module.exports = definePlugin({
    name: "DeviceSpoof",
    description: "This plugin spoofs the device you are on while connecting to the discord gateway",
    authors: [
        {
            id: "1162674474496307210",
            name: "Bandwidth",
        },
    ],
    startAt: StartAt.Init, //we need this so we have our patches applied before the fast connect
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
