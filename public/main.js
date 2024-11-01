document.addEventListener('DOMContentLoaded', function () {
    const add = document.getElementById('add');
    const formModal = document.getElementById('form-modal');
    const confermer = document.getElementById('confirmer');
    const cancel = document.getElementById('cancel');
    const taches = {
        title: document.getElementById('tilte_tache'),
        description: document.getElementById('description'),
        date: document.getElementById('date'),
    };

    add.addEventListener('click', function () {
        formModal.classList.remove('hidden');
        taches.title.value= '';
        taches.description.value = '';
        taches.date.value ='';
    });

    confermer.addEventListener('click', function (event) {
       
        event.preventDefault();
        let titleCopy = taches.title.value;
        let descriptionCopy = taches.description.value;
        let dateCopy = taches.date.value;
        const to_do = document.getElementById('to_do_content');
        formModal.classList.add('hidden');

        let box = document.createElement('div');
        box.innerHTML = `
            <h1>${titleCopy}</h1>
            <p>${descriptionCopy}</p>
            <p>${dateCopy}</p>
        `
        box.classList.add("flex-col");

        // let title_t = document.createElement('h1');
        // let description = document.createElement('p');
        // let datec = document.createElement('p');
        let select = document.getElementById('to_do_options');

        if (select.value == 1) {
                to_do.appendChild(box);
        }


        // if (select.value == 1) {
        //     to_do.appendChild(box);
        //     box.appendChild(title_t);
        //     title_t.innerText = titleCopy;
        //     box.appendChild(description);
        //     description.innerText = descriptionCopy;
        //     box.appendChild(datec);
        //     datec.innerText = dateCopy;
        //     console.log(box);
        // }
        // else if (select.value == 2){
         
        // }
    });
    cancel.addEventListener('click', function () {
        formModal.classList.add('hidden');
    });
});
