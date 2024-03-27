const blogPostSection = document.getElementById('blogPosts');

const clearButton = document.getElementById('clearPosts');

let recoPost = JSON.parse(localStorage.getItem('recoPost'));

let tempArray = JSON.parse(localStorage.getItem('postArray'));



if (!tempArray) {
    let tempArray = []
    if (recoPost) {
        tempArray.push(recoPost)
        postCardCreate()
        localStorage.setItem('postArray', JSON.stringify(tempArray))
        localStorage.setItem('recoPost', null)
        location.reload()
    }
} else if (tempArray) {
    if (recoPost) {
        tempArray.push(recoPost)
        localStorage.setItem('postArray', JSON.stringify(tempArray))
        localStorage.setItem('recoPost', null)
        location.reload()
    }
    postCardCreate()
};

clearButton.addEventListener('click', function(e){
    e.preventDefault();
    if (tempArray) {
        localStorage.setItem('postArray', null)
    };
    location.reload();
})

function postCardCreate() {
    for (post in tempArray) {
        createPostCardContainer(post)
        songTitle(post)
        artistNameGet(post)
        usernameGet(post)
        postContentGet(post)
    };
};

function createPostCardContainer(post) {
    let div = document.createElement('div')
    div.setAttribute('class', 'postCardContainer')
    post++
    div.setAttribute('id', `card${post}`)
    blogPostSection.appendChild(div)
};

function songTitle(post) {
    let heading = document.createElement('h2')
    heading.setAttribute('class', 'songTitle')
    heading.textContent = tempArray[post].songTitle
    post++
    let idSelect = `card${post}`
    document.getElementById(idSelect).appendChild(heading)
}

function artistNameGet(post) {
    let subHeading = document.createElement('h3')
    subHeading.setAttribute('class', 'artistName')
    subHeading.textContent = tempArray[post].artistName
    post++
    let idSelect = `card${post}`
    document.getElementById(idSelect).appendChild(subHeading)
}

function usernameGet(post) {
    let postAuthor = document.createElement('h3')
    postAuthor.setAttribute('class', 'username')
    postAuthor.textContent = tempArray[post].username
    post++
    let idSelect = `card${post}`
    document.getElementById(idSelect).appendChild(postAuthor)
}

function postContentGet(post) {
    let postCont = document.createElement('p')
    postCont.setAttribute('class', 'postContent')
    postCont.textContent = tempArray[post].postContent
    post++
    let idSelect = `card${post}`
    document.getElementById(idSelect).appendChild(postCont)
}
