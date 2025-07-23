const inputElement = document.getElementById('input')
const addBtn = document.getElementById('add')
const listElement = document.getElementById('list')

const doneBtn = document.getElementById('completedBtn')

const notes = [
    {
        title: 'Сходить в магазин',
        completed: false,
    },
    {
        title: 'Выбросить мусор',
        completed: false,
    },
]

function render () {
    for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }
}

function getNoteTemplate(note) {
    if(note.completed === true){
        return `
            <div class="note completed-note">
                <p>${note.title}</p>

                <div class="action-buttons">
                    <button id='completedBtn' class="completed">✓</button>
                    <button id='deleteBtn' class="red">✖</button>
                </div>
            </div>
        `
    }
    return `
        <div class="note">
            <p>${note.title}</p>

            <div class="action-buttons">
                <button id='completedBtn' class="green">✓</button>
                <button id='deleteBtn' class="red">✖</button>
            </div>
        </div>
    `
}

render()

addBtn.onclick = function () {
    if(inputElement.value.length === 0){
        return
    }

    const newNote = {
        title: inputElement.value,
        completed: false,
    }

    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))
    inputElement.value = ''
}

doneBtn.onclick = function () {
    notes[1].completed = true
}