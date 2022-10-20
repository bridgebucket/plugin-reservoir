/**
 * @name RPCDisabler
 * @author Bridgebucket
 * @description RPC Disabler which isn't such a RAM milker.
 * @version 0.0.1
 * @source https://github.com/bridgebucket/plugin-reservoir/tree/main/RPCDisabler
 * @updateUrl https://raw.githubusercontent.com/bridgebucket/plugin-reservoir/main/RPCDisabler/RPCDisabler.plugin.js
 */

module.exports = class RPCDisabler {
    start() {
        BdApi.alert("RPC Disabler v0.0.1", `Thanks for installing RPC Disabler. Not every plugin is perfect, and
        as such may have issues. If you encounter any bugs, add me and tell me about them: bridgebucket#9606`)
    }
    stop() {}
}
