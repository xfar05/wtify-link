function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
        showAlert('URL copied to clipboard');
    }).catch(function () {
        showAlert('Failed to copy URL');
    });
}
function showAlert(message) {
    let alertBox = document.createElement('div');
    alertBox.className = 'alert';
    alertBox.innerText = message;
    document.body.appendChild(alertBox);
    setTimeout(() => {
        alertBox.style.opacity = '0';
        setTimeout(() => alertBox.remove(), 500);
    }, 2000);
}
document.querySelectorAll('.option-icon').forEach(icon => {
    icon.addEventListener('click', function (event) {
        event.stopPropagation();
        let dropdown = this.nextElementSibling;
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== dropdown) menu.classList.remove('show');
        });
        dropdown.classList.toggle('show');
    });
});
document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('show'));
});
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation();
        let url = this.parentElement.getAttribute('data-url');
        copyToClipboard(url);
    });
});
document.querySelectorAll('.go-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation();
        let url = this.parentElement.getAttribute('data-url');
        window.location.href = url;
    });
});