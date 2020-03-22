(function() {

    var dialog = document.querySelector('#modal-example');
    var closeButton = dialog.querySelector('button');
    var showButton = document.querySelector('#modal');
    if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    var closeClickHandler = function(event) {
        dialog.close();
    };
    var showClickHandler = function(event) {
        dialog.showModal();
    };
    showButton.addEventListener('click', showClickHandler);
    closeButton.addEventListener('click', closeClickHandler);
}());
