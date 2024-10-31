document.addEventListener('DOMContentLoaded', function() {
    const add = document.getElementById('add');
    const formModal = document.getElementById('form-modal');
    const confermer = document.getElementById('confirmer');
    const cancel = document.getElementById('cancel');
    const taches = {
        title: document.getElementById('tilte_tache'), 
        description: document.getElementById('description'),
        date: document.getElementById('date'),
    };

    add.addEventListener('click', function() {
        formModal.classList.remove('hidden');
    });

    confermer.addEventListener('click', function(event) {
        event.preventDefault();
        let titleCopy = taches.title.value;
        let descriptionCopy = taches.description.value;
        let dateCopy = taches.date.value;
        formModal.classList.add('hidden');

    });
    cancel.addEventListener('click', function() {
        formModal.classList.add('hidden');
    });
});
