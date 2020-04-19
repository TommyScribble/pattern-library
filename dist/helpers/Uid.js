export var Uid = function () {
    return "ID" + crypto.getRandomValues(new Uint32Array(4)).join('-');
};
//# sourceMappingURL=Uid.js.map