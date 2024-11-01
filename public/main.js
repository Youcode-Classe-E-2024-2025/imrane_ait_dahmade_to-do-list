const add = document.getElementById('add');
const formModal = document.getElementById('form-modal');
const confermer = document.getElementById('confirmer');
const cancel = document.getElementById('cancel');

let tilte_tache = document.getElementById('tilte_tache');
let description = document.getElementById('description');
let date = document.getElementById('date');
let propiety = document.getElementById('propiety');
let to_do_options = document.getElementById('to_do_options');

let Tasks = [];

// Show modal on 'Add' button click
add.addEventListener('click', () => {
    formModal.classList.remove('hidden');
});

// Confirm adding a task
confermer.addEventListener('click', (event) => {
    event.preventDefault();
    const task = {
        title: tilte_tache.value,
        description: description.value,
        date: date.value,
        propriety: propiety.value,
        status: to_do_options.value
    };
    Tasks.push(task);
    clearInputFields();
    formModal.classList.toggle('hidden');
    afficheTache();
});

// Clear input fields after submission
function clearInputFields() {
    tilte_tache.value = '';
    description.value = '';
    date.value = '';
    propiety.value = '';
    to_do_options.value = '';
}

// Display tasks
function afficheTache() {
    const to_do = document.querySelector('.to_do_content');
    const doing = document.querySelector('.doing');
    const done = document.querySelector('.done');
    
    // Clear previous displayed tasks
    to_do.innerHTML = '';
    doing.innerHTML = '';
    done.innerHTML = '';

    for (let i = 0; i < Tasks.length; i++) {
        const task = Tasks[i];
        if (task.status == 1) {
            createHTML(to_do, i, task);
        } else if (task.status == 2) {
            createHTML(doing, i, task);
        } else if (task.status == 3) {
            createHTML(done, i, task);
        }
    }
}

// Create task HTML
function createHTML(place, i, task) {
    const box = document.createElement('div');
    box.className = 'flex flex-col h-34 pl-7';
    box.innerHTML = `
        <h4 class="text-xl">${task.title}</h4>
        <p class="text-sm text-black text-opacity-40">${task.description}</p>
        <p class="text-sm text-black text-opacity-50 pr-6 text-right">${task.date}</p>
        <div class="flex justify-around items-center pt-3 pr-4 pb-5">
            <button class="btn_delete w-9" data-index="${i}">
                <img src="/images/delete_24dp_F38686_FILL0_wght400_GRAD0_opsz24.png" alt="">
            </button>
            <button class="w-9">
                <img src="/images/edit_41dp_FFDF87_FILL0_wght400_GRAD0_opsz40.png" alt="">
            </button>
            <button class="w-9 h-9 border-2px bg-red-600 rounded-full hover:bg-red-700"></button>
        </div>
    `;
    place.appendChild(box);
}

// Cancel adding a task
cancel.addEventListener('click', (event) => {
    event.preventDefault();
    formModal.classList.toggle('hidden');
});

// Event delegation for delete buttons
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn_delete')) {
        const index = event.target.getAttribute('data-index');
        Tasks.splice(index, 1); // Remove task from the array
        afficheTache(); // Update displayed tasks
    }
});
