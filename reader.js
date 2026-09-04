const fs = require("fs")

fs.readFile("./jlpt_othr.json", "utf8", (err, data) => {
    if (err) {
        console.log(err)
        return
    }
   
    let count = 0
    const json = JSON.parse(data)
    const raw = []
    for (let t in json) {
        count++
    }
    console.log(count)
    /*
        if (json[t].jlpt_new !== null) continue
        const obj = {
            kanji: t,
            mean: json[t].meanings,
            kread: json[t].readings_kun,
            oread: json[t].readings_on,
            stroke: json[t].strokes,
            level: 0,
            radicals: [],
        }
        raw.push(obj)
    }
    
    fs.writeFile("jlpt_other.json", JSON.stringify(raw), err => {
        if (err) { 
            console.log(err)
            return
        }
        console.log("done")
    })
    */
})
