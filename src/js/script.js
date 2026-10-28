
// Endpoint version of the fetching
/*
fetch('https://api.npoint.io/59c2824d39c1810536df')
    .then((response) => response.json())
    .then(json => {
        //console.log(Object.keys(json))
        //console.log(json);
        console.log("From endpoint")
        for (const postData of json.Posts) {
            let post = document.createElement('article');
            post.className = 'post';

            let postHeader = document.createElement('header');
            postHeader.className = 'post-header';
            post.appendChild(postHeader);
            let profilePicture = document.createElement('img');
            profilePicture.src = postData.profile_picture;
            profilePicture.alt = 'Profile picture';
            profilePicture.className = 'post-avatar';
            postHeader.appendChild(profilePicture);
            let postDate = document.createElement('span');
            postDate.className = 'post-date';
            postDate.innerText = postData.creation_time;
            postHeader.appendChild(postDate);

            let postBody = document.createElement('article');
            postBody.className = 'post-body';
            post.appendChild(postBody);

            if (postData.post_attachment) {
                let postAttachment = document.createElement('img');
                postAttachment.src = postData.post_attachment;
                postAttachment.alt = 'Post attachment';
                postAttachment.className = 'post-image';
                postBody.appendChild(postAttachment);
            }

            let postText = document.createElement('p');
            postText.innerText = postData.post_text;
            postBody.appendChild(postText);

            let postFooter = document.createElement('footer');
            postFooter.className = 'post-footer';
            post.appendChild(postFooter);
            let likeButton = document.createElement('img');
            likeButton.src = 'res/images/likebutton.png';
            likeButton.alt = 'Like';
            postFooter.appendChild(likeButton);

            document.querySelector('.postsArea').appendChild(post);
        }
            
        for (const friendData of json.Friends) {
            let friend = document.createElement('article');
            friend.className = 'friend';
            let friendProfilePicture = document.createElement('img');
            friendProfilePicture.src = friendData.profile_picture;
            friendProfilePicture.alt = 'Profile picture';
            friendProfilePicture.className = 'friend-avatar';
            friend.appendChild(friendProfilePicture);
            let friendName = document.createElement('p');
            friendName.className = 'friend-name';
            friendName.innerText = friendData.friend_name;
            friend.appendChild(friendName);
            document.querySelector('.leftBar').appendChild(friend);
        }
    }).catch(err => {
        let errorArticle = document.createElement("article");
        errorArticle.className = "postError";
        
        let postErrorBody = document.createElement('article');
        postErrorBody.className = 'post-body';
        errorArticle.appendChild(postErrorBody);

        let errorText = document.createElement('p');
        errorText.innerText = err;
        postErrorBody.appendChild(errorText);

        document.querySelector('.postsArea').appendChild(errorArticle);
    })

    */
    // Local fetching
    if (document.querySelector('.postsArea')) {
    fetch('res/json/posts.json')
    .then((response) => response.json())
    .then(json => {
        console.log("From local json")
        for (const postData of json.Posts) {
            let post = document.createElement('article');
            post.className = 'post';

            let postHeader = document.createElement('header');
            postHeader.className = 'post-header';
            post.appendChild(postHeader);
            let profilePicture = document.createElement('img');
            profilePicture.src = postData.profile_picture;
            profilePicture.alt = 'Profile picture';
            profilePicture.className = 'post-avatar';
            postHeader.appendChild(profilePicture);
            let postDate = document.createElement('span');
            postDate.className = 'post-date';
            postDate.innerText = postData.creation_time;
            postHeader.appendChild(postDate);

            let postBody = document.createElement('article');
            postBody.className = 'post-body';
            post.appendChild(postBody);

            if (postData.post_attachment) {
                let postAttachment = document.createElement('img');
                postAttachment.src = postData.post_attachment;
                postAttachment.alt = 'Post attachment';
                postAttachment.className = 'post-image';
                postBody.appendChild(postAttachment);
            }

            let postText = document.createElement('p');
            postText.innerText = postData.post_text;
            postBody.appendChild(postText);

            let postFooter = document.createElement('footer');
            postFooter.className = 'post-footer';
            post.appendChild(postFooter);
            let likeButton = document.createElement('img');
            likeButton.src = 'res/images/likebutton.png';
            likeButton.alt = 'Like';
            postFooter.appendChild(likeButton);

            document.querySelector('.postsArea').appendChild(post);
        }
            
        for (const friendData of json.Friends) {
            let friend = document.createElement('article');
            friend.className = 'friend';
            let friendProfilePicture = document.createElement('img');
            friendProfilePicture.src = friendData.profile_picture;
            friendProfilePicture.alt = 'Profile picture';
            friendProfilePicture.className = 'friend-avatar';
            friend.appendChild(friendProfilePicture);
            let friendName = document.createElement('p');
            friendName.className = 'friend-name';
            friendName.innerText = friendData.friend_name;
            friend.appendChild(friendName);
            document.querySelector('.leftBar').appendChild(friend);
        }
    }).catch(err => {
        let errorArticle = document.createElement("article");
        errorArticle.className = "postError";
        
        let postErrorBody = document.createElement('article');
        postErrorBody.className = 'post-body';
        errorArticle.appendChild(postErrorBody);

        let errorText = document.createElement('p');
        errorText.innerText = err;
        postErrorBody.appendChild(errorText);

        document.querySelector('.postsArea').appendChild(errorArticle);
    })
}
    document.addEventListener("DOMContentLoaded", function() {
    const profileButton = document.getElementById("profileButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    profileButton.addEventListener("click", function() {
        dropdownMenu.classList.toggle("show");
    });
});