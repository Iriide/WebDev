let isActive = false;
let counter = 0;

document.getElementById('testButton').addEventListener('click', function() {
    if(isActive === true){
        counter = counter + 1;
        document.getElementById('counter').textContent = counter;
    }
});


document.getElementById('activateButton').addEventListener('click', function() {
    isActive = true;
});

document.getElementById('deactivateButton').addEventListener('click', function() {
    isActive = false;
    counter = 0;
    document.getElementById('counter').textContent = "";
});
