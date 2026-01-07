let all = null

fetch("./kanjis.json")
    .then(res => res.json())
    .then(json => all = json)

const test = () => ({
    value: 0,
    rand() { this.value = Math.random() }
})

const home = () => ({
    visible: true,
    menulist: [
        { id: 1, text: "Collection 1" },
        { id: 2, text: "Collection 2" },
        { id: 3, text: "Collection 3" },
        { id: 4, text: "Collection 4" },
        { id: 5, text: "Collection 5" },
        { id: 6, text: "Collection 6" },
        { id: 7, text: "Collection 7" },
        { id: 8, text: "Collection 8" },
        { id: 9, text: "Collection 9" },
        { id: 10, text: "Collection 10" },
        { id: 11, text: "Collection 11" },
        { id: 12, text: "Collection 12" },
        { id: 13, text: "Collection 13" },
        { id: 14, text: "Collection 14" },
        { id: 15, text: "Collection 15" },
        { id: 16, text: "Collection 16" },
        { id: 17, text: "Collection 17" },
        { id: 18, text: "Collection 18" },
        { id: 19, text: "Collection 19" },
        { id: 20, text: "Collection 20" },
        { id: 21, text: "Collection 21" },
        { id: 22, text: "Collection 22" },
    ],
    display() {
        this.visible = true
    },
    opencontent(id) {
        this.$dispatch("emitcontent", id)
        this.visible = false
    }
})

const content = () => ({
    visible: false,
    count: 10,
    collection: 0,
    lesson: 0,
    display({ detail: collection }) {
        this.visible = true
        this.collection = collection
    },
    openhome() {
        this.visible = false
        this.$dispatch("emithome")
    },
    openlearn(lesson) {
        this.visible = false
        this.lesson = lesson
        this.$dispatch("emitlearn", {
            collection: this.collection,
            lesson: this.lesson,
        })
    },
})

const learn = () => ({
    visible: false,
    collection: 0,
    lesson: 0,
    index: 0,
    list: [],
    text: "",

    display({ detail }) {
        this.visible = true
        this.collection = detail.collection
        this.lesson = detail.lesson

        const start = (detail.collection - 1) * 100
            + (detail.lesson - 1) * 10
        const end = start + 10
        
        this.text = all[start]
        for (let i = start; i < end; i++) {
            this.list.push(all[i])
        }
    },
    opencontent() {
        this.visible = false
        this.index = 0
        this.list.length = 0
        this.$dispatch("emitcontent", this.collection)
    },
    next() {
        if (this.index < 9) {
            this.index++
            this.text = this.list[this.index]
        }
    },
    prev() {
        if (this.index > 0) {
            this.index--
            this.text = this.list[this.index]
        }
    },
})

document.addEventListener("alpine:init", () => {
    Alpine.data("home", home)
    Alpine.data("content", content)
    Alpine.data("learn", learn)
})

