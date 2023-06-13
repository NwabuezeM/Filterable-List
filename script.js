const input = document.getElementById('filterInput');
const namesList = document.querySelectorAll('#names li');

input.addEventListener('keyup', () => {
  const filterValue = input.value.toUpperCase();
  namesList.forEach(name => {
    const nameText = name.textContent.toUpperCase();
    if (nameText.includes(filterValue)) {
      name.style.display = '';
    } else {
      name.style.display = 'none';
    }
  });
});