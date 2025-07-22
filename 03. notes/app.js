const inputElement = document.getElementById('input')
const addBtn = document.getElementById('add')
const listElement = document.getElementById('list')

const notes = ['Сходить в магазин', 'Убраться дома']
console.log(notes.length)

function render () {
    for (i = 0; i < notes.length; i++){
        console.log(i)
        listElement.insertAdjacentHTML(
            'beforeend', 
            `
                <div class="note">
                    <p>${notes[i]}</p>

                    <div class="action-buttons">
                        <button class="green">✓</button>
                        <button class="red">✖</button>
                    </div>
                </div>
            `
        )
    }

    inputElement.value = ''
}

render()

addBtn.onclick = function () {
    
}