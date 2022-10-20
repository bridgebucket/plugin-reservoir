/**
 * @name RPCToggle
 * @author Bridgebucket
 * @description RPC Toggler which isn't such a RAM milker.
 * @version 0.0.1
 * @source https://github.com/bridgebucket/plugin-reservoir/tree/main/RPCToggle
 * @updateUrl https://raw.githubusercontent.com/bridgebucket/plugin-reservoir/main/RPCToggle/RPCToggle.plugin.js
 */

module.exports = meta => {
    return{
        start: () => {
            BdApi.alert("RPC Toggle v0.0.1", `Thanks for installing RPC Toggle. Not every plugin is perfect, and
            as such may have issues. If you encounter any bugs, add me and tell me about them: bridgebucket#9606`)
        },
        stop: () => {},
        getSettingsPanel: () => {
            const SetPanel = document.createElement("div");
            SetPanel.id = "RPC-Settings";

            const GameToggleSetting = document.createElement("div");
            GameToggleSetting.classList.add("setting");

            const GameToggleLabel = document.createElement("span")
            GameToggleLabel.textContent = "Toggle Game Activity";
    
            const GameToggleInput = document.createElement("input");
            GameToggleInput.type = "checkbox";
            GameToggleInput.name = "gameactivity";
    
            GameToggleSetting.append(GameToggleLabel, GameToggleInput);

            const SpotifySetting = document.createElement("div");
            SpotifySetting.classList.add("setting");

            const SpotifyLabel = document.createElement("span")
            SpotifyLabel.textContent = "Toggle Spotify Activity";
    
            const SpotifyInput = document.createElement("input");
            SpotifyInput.type = "checkbox";
            SpotifyInput.name = "spotifyactivity";
    
            SpotifySetting.append(SpotifyLabel, SpotifyInput);
    
    
            SetPanel.append(GameToggleSetting, SpotifySetting);
    
            return SetPanel;
        }
    }
};
