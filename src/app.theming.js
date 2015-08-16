export default function theming($mdThemingProvider) {
    var customBlueMap = $mdThemingProvider.extendPalette("light-blue", {
        "contrastDefaultColor": "light",
        "contrastDarkColors": ["50"],
        "50": "ffffff"
    });
    $mdThemingProvider.definePalette("customBlue", customBlueMap);
    $mdThemingProvider.theme("default")
        .primaryPalette("customBlue", {
            "default": "500",
            "hue-1": "50"
        })
        .accentPalette("pink");
}
theming.$inject = ["$mdThemingProvider"];