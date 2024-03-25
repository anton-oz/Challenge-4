const usernameInput = document.querySelector('#username');
const songTitleInput = document.querySelector('#songTitle');
const artistNameInput = document.querySelector('#artistName');
const recoPostInput = document.querySelector('#recoPost');
const submitButton = document.querySelector('#submit');


submitButton.addEventListener('click', function(e) {
    e.preventDefault();

    recoPost = {
        username: usernameInput.value,
        songTitle: songTitleInput.value,
        artistName: artistNameInput.value,
        postContent: recoPostInput.value
    };

    if (!recoPost.username || !recoPost.songTitle || !recoPost.artistName || !recoPost.postContent) {
        alert('Please fill out all fields before submitting :)')
    } else {
        localStorage.setItem('recoPost', JSON.stringify(recoPost))
        window.location.href = 'blog.html'
    };

});