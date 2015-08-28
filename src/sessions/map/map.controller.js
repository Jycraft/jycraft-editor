"use strict";

class Controller {
    constructor($rootScope, $scope, $interval, connection) {
        this.$rootScope = $rootScope;
        this.connection = connection;
        this.players = {
            "PMD221": {x: "555px", y: "444px"}
        };
        var ctrl = this;

        //function randomIntFromInterval(min, max) {
        //    return Math.floor(Math.random() * (max - min + 1) + min);
        //}

        $rootScope.$on(
            "JsonResponse",
            function (event, response) {
                //randomIntFromInterval(100,
                // 500);
                var x = response["PMD221"].x;
                var y = response["PMD221"].y;
                ctrl.players["PMD221"].x = `${x}px`;
                ctrl.players["PMD221"].y = `${y}px`;
            });
        var poll = $interval(function () {
            ctrl.refresh();
        }, 500);
        $scope.$destroy = function () {
            $interval.cancel(poll);
        }
    }

    refresh() {
        let snippet = `
from player_map import playerPositions
print playerPositions()`;
        this.connection.send(snippet);
    }
}
Controller.$inject = ["$rootScope", "$scope", "$interval", "connection"];

export default Controller;
