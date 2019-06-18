webpackJsonp8be81a5c_af38_4bb2_af97_afa3b64dfbed_1_8_2([6],{

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/Styling.js
var pkg = __webpack_require__(1);
module.exports = {}
for (var key in pkg) {
  if (pkg.hasOwnProperty(key)) {
    module.exports[key] = pkg[key];
  }
}
Object.defineProperty(module.exports, "__esModule", { value: true });

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.9.3/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/6.143.0/node_modules/office-ui-fabric-react/lib/Styling.js
var Styling = __webpack_require__(396);
var Styling_default = /*#__PURE__*/__webpack_require__.n(Styling);

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/variants/6.14.0/node_modules/@uifabric/variants/lib/variantThemeType.js
/**
 * Variant theme types values
 *
 * @public
 */
var VariantThemeType = {
    /*
     * No variant.
     */
    None: 0,
    /*
     * A variant where the background is a soft version of the background color. Most other colors remain unchanged.
     */
    Neutral: 1,
    /*
     * A variant where the background is a soft version of the primary color. Most other colors remain unchanged.
     */
    Soft: 2,
    /*
     * A variant where the background is a strong version of the primary color. All colors change.
     * The background becomes shades of the primary color.
     * The foreground/text becomes shades of the background color.
     * The primary color becomes shades of the background.
     */
    Strong: 3
};

// CONCATENATED MODULE: C:/agent/1/_work/9/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@uifabric/variants/6.14.0/node_modules/@uifabric/variants/lib/variants.js
/* harmony export (immutable) */ __webpack_exports__["getVariant"] = getVariant;
/* harmony export (immutable) */ __webpack_exports__["getNeutralVariant"] = getNeutralVariant;
/* harmony export (immutable) */ __webpack_exports__["getSoftVariant"] = getSoftVariant;
/* harmony export (immutable) */ __webpack_exports__["getStrongVariant"] = getStrongVariant;



function makeThemeFromPartials(originalTheme, partialPalette, partialSemantic) {
    // Create variant palette
    var variantTheme = Object(Styling["createTheme"])({ palette: tslib_es6["__assign"]({}, originalTheme.palette, partialPalette) });
    // Change semantic colors to use updated variant palette values
    variantTheme.semanticColors = tslib_es6["__assign"]({}, variantTheme.semanticColors, partialSemantic);
    // Fill in the rest of the theme
    variantTheme = tslib_es6["__assign"]({}, originalTheme, { palette: variantTheme.palette, semanticColors: variantTheme.semanticColors });
    return variantTheme;
}
/**
 * Returns the specified variant theme for the given theme.
 * Do not generate a variant from a variant, the results will be ugly.
 *
 * @export
 * @param {IPartialTheme} theme the theme to build a variant for
 * @param {VariantThemeType} variant the variant type designation
 * @returns {ITheme} the variant theme
 */
function getVariant(theme, variant) {
    switch (variant) {
        case VariantThemeType.Neutral:
            return getNeutralVariant(theme);
        case VariantThemeType.Soft:
            return getSoftVariant(theme);
        case VariantThemeType.Strong:
            return getStrongVariant(theme);
        default:
            return Object(Styling["createTheme"])(theme);
    }
}
/**
 * A variant where the background is a soft shade of the neutral color. Most other colors remain unchanged.
 *
 * @export
 * @param {IPartialTheme} theme the theme to build a variant for
 * @returns {ITheme} the variant theme
 */
function getNeutralVariant(theme) {
    var fullTheme = Object(Styling["createTheme"])(theme);
    var p = fullTheme.palette;
    // commented lines are unchanged, but left in for tracking purposes
    // in a neutral variant, most colors remain unchanged
    var partialPalette = {
        // theme - shifts a shade stronger to account for contrast against stronger background
        // themeDarker: '#004578', // can't go darker, stays the same
        themeDark: p.themeDarker,
        themeDarkAlt: p.themeDark,
        themePrimary: p.themeDarkAlt,
        themeSecondary: p.themePrimary,
        themeTertiary: p.themeSecondary,
        themeLight: p.themeTertiary,
        themeLighter: p.themeLight,
        themeLighterAlt: p.themeLighterAlt,
        // foregrounds
        // black: '#000000',
        // neutralDark: '#212121',
        // neutralPrimary: '#333333',
        // neutralPrimaryAlt: '#3c3c3c',
        // neutralSecondary: '#666666',
        // neutralTertiary: '#a6a6a6',
        // backgrounds - background is still the same scale, just squish it a bit
        // neutralTertiaryAlt: '#c8c8c8',
        neutralQuaternary: p.neutralTertiaryAlt,
        neutralQuaternaryAlt: p.neutralQuaternary,
        neutralLight: p.neutralQuaternaryAlt,
        neutralLighter: p.neutralLight,
        neutralLighterAlt: p.neutralLight,
        white: p.neutralLighter
    };
    var partialSemantic = {
        bodyBackground: p.neutralLighter,
        bodyStandoutBackground: p.neutralLight,
        bodyFrameBackground: !fullTheme.isInverted ? p.neutralLight : p.neutralLighter,
        bodyFrameDivider: !fullTheme.isInverted ? p.neutralLight : p.neutralQuaternaryAlt,
        bodyText: p.neutralPrimary,
        bodySubtext: p.neutralSecondary,
        bodyDivider: p.neutralQuaternaryAlt,
        focusBorder: p.neutralSecondary,
        variantBorder: p.neutralLight,
        variantBorderHovered: p.neutralTertiary,
        defaultStateBackground: p.neutralLight,
        actionLink: p.neutralPrimary,
        actionLinkHovered: p.neutralDark,
        link: p.themeDarkAlt,
        linkHovered: p.themeDarker,
        disabledBackground: !fullTheme.isInverted ? p.neutralLight : p.neutralLighter,
        disabledText: p.neutralTertiary,
        disabledBodyText: p.neutralTertiary,
        disabledBodySubtext: p.neutralTertiaryAlt,
        inputBorder: p.neutralTertiary,
        inputBorderHovered: p.neutralPrimary,
        inputBackground: p.white,
        inputFocusBorderAlt: p.themePrimary,
        inputText: p.neutralPrimary,
        inputTextHovered: p.neutralDark,
        inputPlaceholderText: p.neutralSecondary,
        buttonBackground: p.neutralQuaternaryAlt,
        buttonBackgroundHovered: p.neutralQuaternary,
        buttonBackgroundPressed: !fullTheme.isInverted ? p.neutralTertiary : p.neutralTertiaryAlt,
        buttonBackgroundDisabled: p.neutralLight,
        buttonBorder: 'transparent',
        buttonText: p.neutralPrimary,
        buttonTextHovered: p.neutralDark,
        buttonTextPressed: p.neutralDark,
        buttonTextDisabled: !fullTheme.isInverted ? p.neutralTertiary : p.neutralTertiaryAlt,
        buttonBorderDisabled: 'transparent',
        primaryButtonBackground: p.themePrimary,
        primaryButtonBackgroundHovered: p.themeDarkAlt,
        primaryButtonBackgroundPressed: p.themeDark,
        primaryButtonBorder: 'transparent',
        primaryButtonText: p.white,
        primaryButtonTextHovered: p.white,
        primaryButtonTextPressed: p.white,
        accentButtonBackground: p.accent,
        accentButtonText: p.white,
        menuBackground: p.white,
        menuDivider: p.neutralTertiaryAlt,
        menuItemBackgroundHovered: p.neutralLighter,
        menuItemBackgroundPressed: p.neutralLight,
        menuItemText: p.neutralPrimary,
        menuItemTextHovered: !fullTheme.isInverted ? p.neutralDark : p.neutralPrimary
    };
    return makeThemeFromPartials(fullTheme, partialPalette, partialSemantic);
}
/**
 * A variant where the background is a soft version of the primary color. Most other colors remain unchanged.
 *
 * @export
 * @param {IPartialTheme} theme the theme to build a variant for
 * @returns {ITheme} the variant theme
 */
function getSoftVariant(theme) {
    var fullTheme = Object(Styling["createTheme"])(theme);
    var p = fullTheme.palette;
    // commented lines are unchanged, but left in for tracking purposes
    // in a soft variant, most colors remain unchanged
    var partialPalette = {
        // theme - shifts a shade stronger to account for contrast against stronger background
        // themeDarker: '#004578', // can't go darker, stays the same
        themeDark: p.themeDarker,
        themeDarkAlt: p.themeDark,
        themePrimary: p.themeDarkAlt,
        themeSecondary: p.themePrimary,
        themeTertiary: p.themeSecondary,
        themeLight: p.themeTertiary,
        themeLighter: p.themeLight,
        themeLighterAlt: p.themeLighter,
        // foregrounds
        // black: '#000000',
        // neutralDark: '#212121',
        // neutralPrimary: '#333333',
        // neutralPrimaryAlt: '#3c3c3c',
        // neutralSecondary: '#666666',
        // neutralTertiary: '#a6a6a6',
        // backgrounds - page background starts at themeLighterAlt or themeLight, depending on inverted theme or not,
        // then gets steps stronger from there
        neutralTertiaryAlt: !fullTheme.isInverted ? p.themeDarkAlt : p.themeDarker,
        neutralQuaternary: !fullTheme.isInverted ? p.themePrimary : p.themeDark,
        neutralQuaternaryAlt: !fullTheme.isInverted ? p.themeSecondary : p.themeDarkAlt,
        neutralLight: !fullTheme.isInverted ? p.themeTertiary : p.themePrimary,
        neutralLighter: !fullTheme.isInverted ? p.themeLight : p.themeSecondary,
        neutralLighterAlt: !fullTheme.isInverted ? p.themeLighter : p.themeTertiary,
        white: !fullTheme.isInverted ? p.themeLighterAlt : p.themeLight
    };
    var partialSemantic = {
        bodyBackground: !fullTheme.isInverted ? p.themeLighterAlt : p.themeLight,
        bodyStandoutBackground: !fullTheme.isInverted ? p.themeLighter : p.themeTertiary,
        bodyFrameBackground: !fullTheme.isInverted ? p.themeLighter : p.themeLight,
        bodyFrameDivider: !fullTheme.isInverted ? p.themeLighter : p.neutralQuaternary,
        bodyText: p.neutralPrimary,
        bodySubtext: p.neutralSecondary,
        bodyDivider: p.neutralQuaternaryAlt,
        inputBorder: p.neutralTertiary,
        // inputBorderHovered: p.neutralPrimary,
        inputBackground: p.white,
        // inputBackgroundChecked: p.themePrimary,
        // inputBackgroundCheckedHovered: p.themeDarkAlt,
        inputForegroundChecked: p.themeLighter,
        // inputFocusBorderAlt: p.themePrimary,
        inputText: p.neutralPrimary,
        inputTextHovered: p.neutralDark,
        inputPlaceholderText: p.neutralSecondary,
        focusBorder: p.neutralSecondary,
        variantBorder: p.neutralLight,
        variantBorderHovered: p.neutralTertiary,
        defaultStateBackground: p.neutralLight,
        actionLink: p.neutralPrimary,
        actionLinkHovered: p.neutralDark,
        link: p.themeDarkAlt,
        linkHovered: p.themeDarker,
        disabledBackground: p.neutralLight,
        disabledText: p.neutralTertiary,
        disabledBodyText: p.neutralTertiary,
        disabledBodySubtext: p.neutralTertiaryAlt,
        buttonBackground: p.neutralQuaternaryAlt,
        buttonBackgroundHovered: p.neutralQuaternary,
        buttonBackgroundPressed: !fullTheme.isInverted ? p.neutralTertiary : p.neutralTertiaryAlt,
        buttonBackgroundDisabled: p.neutralLight,
        buttonBorder: 'transparent',
        buttonText: p.neutralPrimary,
        buttonTextHovered: p.neutralDark,
        buttonTextPressed: p.neutralDark,
        buttonTextDisabled: !fullTheme.isInverted ? p.neutralTertiary : p.neutralTertiaryAlt,
        buttonBorderDisabled: 'transparent',
        primaryButtonBackground: p.themePrimary,
        primaryButtonBackgroundHovered: p.themeDarkAlt,
        primaryButtonBackgroundPressed: p.themeDark,
        primaryButtonBorder: 'transparent',
        primaryButtonText: p.white,
        primaryButtonTextHovered: p.white,
        primaryButtonTextPressed: p.white,
        accentButtonBackground: p.accent,
        accentButtonText: p.white,
        menuBackground: p.white,
        menuDivider: p.neutralTertiaryAlt,
        menuItemBackgroundHovered: p.neutralLighter,
        menuItemBackgroundPressed: p.neutralLight,
        menuItemText: p.neutralPrimary,
        menuItemTextHovered: !fullTheme.isInverted ? p.neutralDark : p.neutralPrimary
    };
    return makeThemeFromPartials(fullTheme, partialPalette, partialSemantic);
}
/**
 * A variant where the background is a strong version of the primary color. All colors change.
 * The background becomes shades of the primary color.
 * The foreground/text becomes shades of the background color.
 * The primary color becomes shades of the background.
 *
 * @export
 * @param {IPartialTheme} theme the theme to build a variant for
 * @returns {ITheme} the variant theme
 */
function getStrongVariant(theme) {
    var fullTheme = Object(Styling["createTheme"])(theme);
    var p = fullTheme.palette;
    // dirty algorithm:
    // in a tricolor theme, foreground doesn't get used?
    // theme colors -> background shades
    // foregrounds -> background shades
    // backgrounds -> theme colors
    var partialPalette = {
        // theme
        themeDarker: p.white,
        themeDark: p.neutralLighterAlt,
        themeDarkAlt: p.neutralLighterAlt,
        themePrimary: p.white,
        themeSecondary: p.neutralLighter,
        themeTertiary: p.neutralLight,
        themeLight: p.neutralQuaternaryAlt,
        themeLighter: p.neutralQuaternary,
        themeLighterAlt: p.neutralTertiaryAlt,
        // foregrounds
        black: p.neutralLighterAlt,
        neutralDark: p.neutralLighter,
        neutralPrimary: p.white,
        neutralPrimaryAlt: p.neutralLight,
        neutralSecondary: p.neutralQuaternaryAlt,
        neutralTertiary: p.neutralQuaternary,
        // backgrounds
        neutralTertiaryAlt: p.themeLighterAlt,
        neutralQuaternary: p.themeLighterAlt,
        neutralQuaternaryAlt: p.themeLighter,
        neutralLight: p.themeLight,
        neutralLighter: p.themeTertiary,
        neutralLighterAlt: p.themeSecondary,
        white: p.themePrimary
    };
    var partialSemantic = {
        bodyBackground: p.themePrimary,
        bodyStandoutBackground: p.themeDarkAlt,
        bodyFrameBackground: !fullTheme.isInverted ? p.themeDarkAlt : p.themePrimary,
        bodyFrameDivider: !fullTheme.isInverted ? p.themeDarkAlt : p.themeTertiary,
        bodyText: p.white,
        bodySubtext: p.white,
        bodyDivider: p.themeTertiary,
        inputBorder: p.themeDarkAlt,
        inputBorderHovered: p.themeDarker,
        inputBackground: p.white,
        inputBackgroundChecked: p.white,
        inputBackgroundCheckedHovered: p.themePrimary,
        inputForegroundChecked: p.themeDark,
        inputFocusBorderAlt: p.themeTertiary,
        inputText: p.neutralPrimary,
        inputTextHovered: p.neutralDark,
        inputPlaceholderText: p.neutralSecondary,
        focusBorder: p.white,
        variantBorder: p.themeDarkAlt,
        variantBorderHovered: p.themeDarker,
        defaultStateBackground: p.neutralLighterAlt,
        actionLink: p.white,
        actionLinkHovered: p.white,
        link: p.white,
        linkHovered: p.white,
        disabledBackground: p.themeDarkAlt,
        disabledText: p.themeTertiary,
        disabledBodyText: p.neutralQuaternary,
        disabledBodySubtext: p.neutralTertiaryAlt,
        buttonBackground: p.themePrimary,
        buttonBackgroundHovered: p.themeDarkAlt,
        buttonBackgroundPressed: p.themeDark,
        buttonBackgroundDisabled: !fullTheme.isInverted ? p.themeLighter : p.themeLight,
        buttonBorder: p.white,
        buttonText: p.white,
        buttonTextHovered: p.white,
        buttonTextPressed: p.white,
        buttonTextDisabled: p.themeTertiary,
        buttonBorderDisabled: 'transparent',
        primaryButtonBackground: p.white,
        primaryButtonBackgroundHovered: !fullTheme.isInverted ? p.themeLighter : p.themeLight,
        primaryButtonBackgroundPressed: !fullTheme.isInverted ? p.themeLight : p.themeTertiary,
        primaryButtonBorder: 'transparent',
        primaryButtonText: !fullTheme.isInverted ? p.themePrimary : p.neutralPrimary,
        primaryButtonTextHovered: !fullTheme.isInverted ? p.themeDark : p.neutralDark,
        primaryButtonTextPressed: !fullTheme.isInverted ? p.themeDark : p.neutralDark,
        accentButtonBackground: p.white,
        accentButtonText: !fullTheme.isInverted ? p.themePrimary : p.neutralPrimary,
        menuBackground: p.white,
        menuDivider: p.neutralTertiaryAlt,
        menuItemBackgroundHovered: p.neutralLighter,
        menuItemBackgroundPressed: p.neutralLight,
        menuItemText: p.neutralPrimary,
        menuItemTextHovered: !fullTheme.isInverted ? p.neutralDark : p.neutralPrimary
    };
    // Strong variant is unique here, we've redefined the entire palette and are
    // effectively inverting the theme. Thus, do not mix in the original theme's value
    // for the palette and semanticColors, since they will not work well "inverted",
    // instead, use the new palette and then generate semanticColors from scratch.
    // Create variant palette
    var variantTheme = Object(Styling["createTheme"])({ palette: tslib_es6["__assign"]({}, fullTheme.palette, partialPalette) });
    // Change semantic colors to use updated variant palette values
    variantTheme.semanticColors = tslib_es6["__assign"]({}, variantTheme.semanticColors, partialSemantic);
    // Fill in the rest of the theme
    variantTheme = tslib_es6["__assign"]({}, fullTheme, { palette: variantTheme.palette, semanticColors: variantTheme.semanticColors, isInverted: !fullTheme.isInverted });
    return variantTheme;
}


/***/ })

});
//# sourceMappingURL=6.6_571d35a87fd16ce7edbb.js.map