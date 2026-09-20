const fs = require("fs").promises;

async function readFiles() {
  const files = ["./data/radicals0.json", "./data/radicals1.json", "./data/radicals2.json"];

  try {
    const contents = await Promise.all(
      files.map(file => fs.readFile(file, "utf8"))
    );

    const clean = [];
    contents.forEach((content, index) => {
      const json = JSON.parse(content)[0];
        
        for (let i = 1; i < json.length; i++) {
            const mean = json[i][2] ? json[i][2].split() : [];
            const kread = json[i][3] ? json[i][3].split() : [];
            const oread = json[i][4] ? json[i][4].split() : [];
            
            clean.push({
                kanji: json[i][0],
                mean,
                kread: kread.filter(k => k !== " "),
                oread: oread.filter(o => o !== " "),
            })
        }

    });
    
    try {
        fs.writeFile('radicals_core.json', JSON.stringify(clean), 'utf8');  
        console.log('File written successfully!');
    } catch (err) {
        console.error('Error writing file:', err);
    }

  } catch (err) {
    console.error("Error reading files:", err);
  }
}

readFiles();

