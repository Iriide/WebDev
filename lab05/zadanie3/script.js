document.getElementById('addButton').addEventListener('click', function() {
    const list = document.getElementById('list');
    const newItem = document.createElement('li');
    newItem.textContent = `Element ${list.children.length + 1}`;
    list.appendChild(newItem);
});

document.getElementById('deleteButton').addEventListener('click', function() {
    const list = document.getElementById('list');
    if (list.children.length > 0) {
        list.removeChild(list.children[0]);
    }
});