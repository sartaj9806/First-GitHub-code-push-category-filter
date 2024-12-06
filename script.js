const buttons = document.querySelectorAll('.buttons button');
const items = document.querySelectorAll('.container .all');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-set');
        showList(filter);
    })
})

function showList(filter) {
    items.forEach(item => {
        if (filter == 'all' || item.classList.contains(filter)) {
            item.style.display = '';
        }
        else {
            item.style.display = 'none';
        }
    });
}