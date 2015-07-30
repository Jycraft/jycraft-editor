export default function routing($urlRouterProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise("/");

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
