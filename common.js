const paths = [
    { id: 0, name: "RDCL", file: "radicals_core.json", text: "Radicals" },
    { id: 1, name: "LVL5", file: "jlpt_lvl5.json", text: "JLPT N5" },
    { id: 2, name: "LVL4", file: "jlpt_lvl4.json", text: "JLPT N4" },
    { id: 3, name: "LVL3", file: "jlpt_lvl3.json", text: "JLPT N3" },
    { id: 4, name: "LVL2", file: "jlpt_lvl2.json", text: "JLPT N2" },
    { id: 5, name: "LVL1", file: "jlpt_lvl1.json", text: "JLPT N1" },
    { id: 6, name: "OTHR", file: "jlpt_othr.json", text: "JLPT OTHER" },
]

async function loadJSON(url) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json(); // Parses JSON string into a JS object
        return data
    } catch (error) {
        console.error("Could not load JSON file:", error);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
    
        // Swap elements array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
