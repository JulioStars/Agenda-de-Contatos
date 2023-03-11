const form = document.getElementById('form-contatos');
const table = document.querySelector('table')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#phone').value;

    const row = table.insertRow();
    row.innerHTML = `
    <td>${name}</td>
    <td>${phone}</td>
    `;

    form.reset();
});