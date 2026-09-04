const paths = [
    { id: 1, name: "LVL5", file: "jlpt_lvl5.json" },
    { id: 2, name: "LVL4", file: "jlpt_lvl4.json" },
    { id: 3, name: "LVL3", file: "jlpt_lvl3.json" },
    { id: 4, name: "LVL2", file: "jlpt_lvl2.json" },
    { id: 5, name: "LVL1", file: "jlpt_lvl1.json" },
    { id: 6, name: "OTHR", file: "jlpt_othr.json" },
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
