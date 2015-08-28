"use strict";

class Toast {
    constructor ($mdToast) {
        this.$mdToast = $mdToast;
    }

    show (message) {
        this.$mdToast.show(this.$mdToast.simple().content(message));
    }
}
Toast.$inject = ["$mdToast"];

export default Toast;