const fs = require("fs")

fs.readFile("./kanji-jouyou.json", "utf8", (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    
    let i = 0
    const json = JSON.parse(data)
    const raw = []
    for (let t in json) {
        const obj = {
            kanji: t,
            mean: json[t].meanings,
            kread: json[t].readings_kun,
            oread: json[t].readings_on,
            stroke: json[t].strokes,
            radicals: [],
        }
        raw.push(obj)
    }

    fs.writeFile("kanjis.json", JSON.stringify(raw), err => {
        if (err) { 
            console.log(err)
            return
        }
        console.log("done")
    })
})
