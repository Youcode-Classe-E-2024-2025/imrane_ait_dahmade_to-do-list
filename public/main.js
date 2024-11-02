const add = document.getElementById('add');
const formModal = document.getElementById('form-modal');
const confermer = document.getElementById('confirmer');
const cancel = document.getElementById('cancel');

let tilte_tache = document.getElementById('tilte_tache');
let description = document.getElementById('description');
let date = document.getElementById('date');
let propiety = document.getElementById('propiety');
let to_do_options = document.getElementById('to_do_options');

let Tasks = JSON.parse(localStorage.getItem('Tasks')) || [];
console.log(Tasks);
afficheTache();
add.addEventListener('click', () => {
    formModal.classList.remove('hidden');
});

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
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
    clearInputFields();
    formModal.classList.toggle('hidden');

});

function clearInputFields() {
    tilte_tache.value = '';
    description.value = '';
    date.value = '';
    propiety.value = '';
    to_do_options.value = '';
}


function afficheTache() {
    const to_do = document.querySelector('.to_do_content');
    const doing = document.querySelector('.doing');
    const done = document.querySelector('.done');

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

function createHTML(place, i, task) {
    const box = document.createElement('div');
    box.className = 'flex flex-col h-34 pl-7';
    box.innerHTML = `
        <h4 class="text-xl">${task.title}</h4>
        <p class="text-sm text-black text-opacity-40">${task.description}</p>
        <p class="text-sm text-black text-opacity-50 pr-6 text-right">${task.date}</p>
        <div class="flex justify-around items-center pt-3 pr-4 pb-5">
            <button onclick = 'deleteFunction(${i})' class="btn_delete w-9" data-index="${i}">
                <img   src="/images/delete_24dp_F38686_FILL0_wght400_GRAD0_opsz24.png" alt="">
            </button>
                  <div id="propriete"
                        class="  flex  flex-col justify-center items-center gap-4 bg-white text-yellow-700">
                      
                     
                        <select onchange='update(${i}, event.target.value)' class=" text-yellow-700 w-1/3 border-2 bg-amber-300 rounded-2xl " name=" statut"
                        id="propiety">
                        <option value=''>slect status</option>
                        <option value="1">P1</option>
                        <option value="2">P2</option>
                        <option value="3">P3</option>
                    </select>
                    </div>
           
            <button class="w-9   h-9 border-2px bg-red-600 rounded-full hover:bg-red-700"></button>
        </div>
    `;
    place.appendChild(box);
}


cancel.addEventListener('click', (event) => {
    event.preventDefault();
    formModal.classList.toggle('hidden');
});

// document.addEventListener('click', (event) => {
//     if (event.target.classList.contains('btn_delete')) {
//         const index = event.target.getAttribute('data-index');
//         Tasks.splice(index, 1);
//         afficheTache(); 
// //     }
// });
function deleteFunction(i) {
    console.log('Current Tasks:', Tasks);
    console.log('Index to remove:', i);

    if (i >= 0 && i < Tasks.length) {
        Tasks.splice(i, 1);
        localStorage.setItem('Tasks', JSON.stringify(Tasks));
        window.location.reload()
    } else {
        console.error('Invalid index:', i);
    }
}
function update(i, newStatus) {
    console.log('New Status:', newStatus);
    console.log('Current Status:', Tasks[i].status);

    Tasks[i].status = newStatus;

    localStorage.setItem('Tasks', JSON.stringify(Tasks));

    afficheTache();
}

