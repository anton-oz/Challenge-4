const usernameInput = document.querySelector('#username');
const songTitleInput = document.querySelector('#songTitle');
const recoPostInput = document.querySelector('#recoPost');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();

    recoPost = {
        username: usernameInput.value,
        songTitle: songTitleInput.value,
        recoPost: recoPostInput.value
    }

    console.log()

    window.location.href()
})