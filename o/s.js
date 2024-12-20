function V(o) { window.enmity.plugins.registerPlugin(o); }

const r = {
    byProps: (...o) => window.enmity.modules.filters.byProps(...o),
    byName: (o, n) => window.enmity.modules.filters.byName(o, n),
    byTypeName: (o, n) => window.enmity.modules.filters.byTypeName(o, n),
    byDisplayName: (o, n) => window.enmity.modules.filters.byDisplayName(o, n)
};

function D(...o) { return window.enmity.modules.bulk(...o); }
function c(...o) { return window.enmity.modules.getByProps(...o); }

const M = window.enmity.modules.common,
    O = window.enmity.modules.common.Constants,
    f = window.enmity.modules.common.Clipboard;

const t = window.enmity.modules.common.React;
window.enmity.modules.common.Assets,
    window.enmity.modules.common.Messages,
    window.enmity.modules.common.Clyde,
    window.enmity.modules.common.Avatars,
    window.enmity.modules.common.Native;

window.enmity.modules.common.Dispatcher,
    window.enmity.modules.common.Storage;

const v = window.enmity.modules.common.Toasts;
window.enmity.modules.common.Dialog,
    window.enmity.modules.common.Token,
    window.enmity.modules.common.REST,
    window.enmity.modules.common.Settings,
    window.enmity.modules.common.Users;

const R = window.enmity.modules.common.Navigation;
window.enmity.modules.common.NavigationNative,
    window.enmity.modules.common.NavigationStack,
    window.enmity.modules.common.Theme,
    window.enmity.modules.common.Linking;

const T = window.enmity.modules.common.StyleSheet,
    l = window.enmity.modules.common.ColorMap;

window.enmity.modules.common.Components,
    window.enmity.modules.common.Locale,
    window.enmity.modules.common.Profiles,
    window.enmity.modules.common.Lodash,
    window.enmity.modules.common.Logger,
    window.enmity.modules.common.Flux,
    window.enmity.modules.common.SVG,
    window.enmity.modules.common.Scenes,
    window.enmity.modules.common.Moment;

function _(o) { return window.enmity.patcher.create(o); }

function a(o) { return window.enmity.assets.getIDByName(o); }

function z(o, n, i) { return window.enmity.utilities.findInReactTree(o, n, i); }

var H = "ViewRaw",
    G = "1.0.0",
    J = "View raw message data",
    K = [{ name: "sapphire", id: "757982547861962752" }],
    E = { name: H, version: G, description: J, authors: K };

const { components: e } = window.enmity;
e.Alert, e.Button, e.FlatList;

const U = e.Image;
e.ImageBackground, e.KeyboardAvoidingView, e.Modal, e.Pressable, e.RefreshControl;

const W = e.ScrollView;
e.SectionList, e.StatusBar, e.StyleSheet, e.Switch, e.Text, e.TextInput, e.TouchableHighlight, e.TouchableOpacity, e.TouchableWithoutFeedback, e.Touchable, e.View, e.VirtualizedList, e.Form, e.FormArrow, e.FormCTA, e.FormCTAButton, e.FormCardSection, e.FormCheckbox, e.FormDivider, e.FormHint, e.FormIcon, e.FormInput, e.FormLabel, e.FormRadio, e.FormRow, e.FormSection, e.FormSelect, e.FormSubLabel, e.FormSwitch, e.FormTernaryCheckBox, e.FormText, e.FormTextColors, e.FormTextSizes;

const { ActionSheetRow: d } = c("ActionSheetRow"),
    { FormRow: F } = c("FormRow");

var Y = ({ label: o, icon: n, onPress: i }) => {
    const m = T.createThemedStyleSheet({ iconComponent: { width: 24, height: 24, tintColor: l.colors.INTERACTIVE_NORMAL } });
    return d ? t.createElement(d, { label: o, icon: t.createElement(d.Icon, { source: n, IconComponent: () => t.createElement(U, { resizeMode: "cover", style: m.iconComponent, source: n }) }), onPress: i }) : t.createElement(F, { label: o, leading: t.createElement(F.Icon, { source: n }), onPress: i });
};

const $ = (o) => {
    const n = JSON.parse(JSON.stringify(o));
    for (const i in n.author) switch (i) {
        case "email":
        case "phone":
        case "mfaEnabled":
        case "hasBouncedEmail":
            delete n.author[i];
    }
    return n;
};

const w = M.ReactNative,
    N = T.createThemedStyleSheet({
        codeBlock: {
            fontFamily: O.Fonts.CODE_SEMIBOLD,
            fontSize: 12,
            textAlignVertical: "center",
            backgroundColor: l.colors.BACKGROUND_SECONDARY,
            color: l.colors.TEXT_NORMAL,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: l.colors.BACKGROUND_TERTIARY,
            padding: 10
        }
    }),
    X = ({ style: o, children: n }) => t.createElement(w.TextInput, { editable: !1, multiline: !0, style: [N.codeBlock, o && o], value: n }),
    B = ({ selectable: o, style: n, children: i }) => t.createElement(w.Text, { selectable: o, style: [N.codeBlock, n && n] }, i);

var P = ({ selectable: o, style: n, children: i }) => o ? w.Platform.select({ ios: t.createElement(X, { style: n, children: i }), default: t.createElement(B, { style: n, children: i, selectable: !0 }) }) : t.createElement(B, { style: n, children: i });

const A = c("Looks", "Colors", "Sizes");

function j({ message: o }) {
    const n = t.useMemo(() => JSON.stringify($(o), null, 4), [o.id]),
        i = { marginBottom: 8 };
    return t.createElement(t.Fragment, null,
        t.createElement(W, { style: { flex: 1, marginHorizontal: 14, marginVertical: 10 } },
            t.createElement(A, { style: i, text: "Copy Raw Content", color: "brand", size: "small", disabled: !o.content, onPress: () => { f.setString(o.content), v.open({ content: "Copied content to clipboard", source: a("toast_copy_link") }) } }),
            t.createElement(A, { style: i, text: "Copy Raw Data", color: "brand", size: "small", onPress: () => { f.setString(n), v.open({ content: "Copied data to clipboard", source: a("toast_copy_link") }) } }),
            o.content && t.createElement(P, { selectable: !0, style: i }, o.content),
            t.createElement(P, { selectable: !0 }, n)
        )
    );
}

const [k, { getHeaderCloseButton: q }, { Navigator: Q }] = D(r.byProps("openLazy", "hideActionSheet"), r.byProps("getHeaderCloseButton"), r.byProps("Navigator"));
const u = _(E.name);

const Z = {
    ...E,
    onStart() {
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
        u.unpatchAll();
    }
};

V(Z);
