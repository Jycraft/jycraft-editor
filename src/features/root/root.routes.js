export default function routing($stateProvider) {
    $stateProvider.state("root", {
            abstract: true,
            template: require("./root.html"),
            controller: require("./root.controller"),
            controllerAs: "ctrl"
        }
    );
}
