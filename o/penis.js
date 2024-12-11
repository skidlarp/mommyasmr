function V(o) {
    window.enmity.plugins.registerPlugin(o);
}

const r = {
    byProps: (...o) => window.enmity.modules.filters.byProps(...o),
    byName: (o, n) => window.enmity.modules.filters.byName(o, n),
    byTypeName: (o, n) => window.enmity.modules.filters.byTypeName(o, n),
    byDisplayName: (o, n) => window.enmity.modules.filters.byDisplayName(o, n)
};

function D(...o) {
    return window.enmity.modules.bulk(...o);
}

function c(...o) {
    return window.enmity.modules.getByProps(...o);
}

const M = window.enmity.modules.common;
const O = window.enmity.modules.common.Constants;
const f = window.enmity.modules.common.Clipboard;
const t = window.enmity.modules.common.React;
const v = window.enmity.modules.common.Toasts;
const R = window.enmity.modules.common.Navigation;
const T = window.enmity.modules.common.StyleSheet;
const l = window.enmity.modules.common.ColorMap;

const settings = {
    platform: {
        type: 'SELECT',
        description: 'What platform to show up as on',
        restartNeeded: true,
        options: [
            { label: 'Desktop', value: 'desktop', default: true },
            { label: 'Web', value: 'web' },
            { label: 'Mobile', value: 'mobile' },
            { label: 'Embedded (Console)', value: 'embedded' }
        ]
    }
};

function getPlatform() {
    const platform = settings.platform ?? 'desktop';
    switch (platform) {
        case 'desktop':
            return { browser: 'Discord Client' };
        case 'web':
            return { browser: 'Chrome' };
        case 'mobile':
            return { browser: 'Discord iOS' };
        case 'embedded':
            return { browser: 'Discord Embedded' };
    }
}

const patch = {
    find: "_doIdentify(){",
    replacement: {
        match: /(\[IDENTIFY\].*let.{0,5}=\{.*properties:)(.*),presence/,
        replace: "$1{...$2,...getPlatform()},presence"
    }
};

const Plugin = {
    name: 'PlatformSpoofer',
    description: 'Spoof what platform or device you\'re on',
    authors: ['EquicordDevs.Drag'],
    settingsAboutComponent: () => {
        return t.createElement('div', null, 
            t.createElement(M.FormText, { className: 'platform-warning' }, 'We can\'t guarantee this plugin won\'t get you warned or banned.')
        );
    },
    settings: settings,
    patches: [patch],
    getPlatform: getPlatform
};

V(Plugin);
