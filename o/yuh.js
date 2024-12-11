const V = (o) => window.enmity.plugins.registerPlugin(o);

const r = {
    byProps: (...o) => window.enmity.modules.filters.byProps(...o),
    byName: (o, n) => window.enmity.modules.filters.byName(o, n),
    byTypeName: (o, n) => window.enmity.modules.filters.byTypeName(o, n),
    byDisplayName: (o, n) => window.enmity.modules.filters.byDisplayName(o, n),
};

function D(...o) {
    return window.enmity.modules.bulk(...o);
}

function c(...o) {
    return window.enmity.modules.getByProps(...o);
}

const t = window.enmity.modules.common.React;
const v = window.enmity.modules.common.Toasts;
const T = window.enmity.modules.common.StyleSheet;
const l = window.enmity.modules.common.ColorMap;
const R = window.enmity.modules.common.Navigation;
const _ = (o) => window.enmity.patcher.create(o);

const settings = {
    store: {
        platform: "desktop",
    },
    options: [
        { label: "Desktop", value: "desktop", default: true },
        { label: "Web", value: "web" },
        { label: "Mobile", value: "mobile" },
        { label: "Console", value: "console" },
    ],
};

const getPlatform = () => {
    switch (settings.store.platform ?? "desktop") {
        case "desktop":
            return { browser: "Discord Client" };
        case "web":
            return { browser: "Chrome" };
        case "mobile":
            return { browser: "Discord iOS" };
        case "console":
            return { browser: "Console" };
    }
};

const E = {
    name: "PlatformSpoofer",
    version: "1.0.0",
    description: "Spoof what platform or device you're on",
    authors: [
        {
            name: "$Bandwidth",
            id: "123456789012345678",
        },
    ],
};

const u = _(E.name);

const Z = {
    ...E,
    onStart() {
        u.before(c("identify"), "_doIdentify", ([identify]) => {
            identify.properties = {
                ...identify.properties,
                ...getPlatform(),
            };
        });
    },
    onStop() {
        u.unpatchAll();
    },
};

V(Z);
