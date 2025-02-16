function toggleStartMenu() {
    let menu = document.getElementById('startMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
function openWindow(app) {
    let win = document.getElementById(app.toLowerCase() + 'Window');
    if (win) win.style.display = 'block';
}
function closeWindow(id) {
    let win = document.getElementById(id);
    if (win) win.style.display = 'none';
}
function loadPage() {
    let input = document.querySelector('input[type="text"]');
    let frame = document.getElementById('browserFrame');
    if (input && frame) frame.src = input.value;
}
