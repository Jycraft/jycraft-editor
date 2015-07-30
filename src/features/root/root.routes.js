import RootController from "./root.controller";

export default function routing($stateProvider) {
    $stateProvider.state('root', {
            abstract: true,
            template: require("./root.html"),
            controller: RootController
        }
    );
}
