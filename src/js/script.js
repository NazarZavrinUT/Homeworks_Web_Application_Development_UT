fetch('https://api.npoint.io/59c2824d39c1810536df')
    .then((response) => response.json())
    .then(json => {
        // console.log(json);
        for (const postData of json) {
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
            let postAttachment = document.createElement('img');
            postAttachment.src = postData.post_attachment;
            postAttachment.alt = 'Post attachment';
            postAttachment.className = 'post-image';
            postBody.appendChild(postAttachment);
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

            let friend = document.createElement('article');
            friend.className = 'friend';
            let friendProfilePicture = document.createElement('img');
            friendProfilePicture.src = postData.profile_picture;
            friendProfilePicture.alt = 'Profile picture';
            friendProfilePicture.className = 'friend-avatar';
            friend.appendChild(friendProfilePicture);
            let friendName = document.createElement('p');
            friendName.className = 'friend-name';
            friendName.innerText = postData.profile_picture;// TODO
            friend.appendChild(friendName);
            document.querySelector('.leftBar').appendChild(friend);
        }
        /* <article class="friend">
                <img src="res/images/hacker.png" alt="Profile picture" class="friend-avatar">
                <p class="friend-name">H4ck3r</p>
            </article>
            <article class="post">
            <header class="post-header">
                <img src="res/images/hacker.png" alt="Profile picture" class="post-avatar">
                <span class="post-date">May 20, 2026</span>
            </header>
            <article class="post-body">
                <img src="res/images/badcode.png" alt="Post attachment" class="post-image">
                <p>Guys will this code run? Exam rn need answer quick</p>
            </article>
            <footer class="post-footer">
                <img src="res/images/likebutton.png" alt="Like">
            </footer>
        </article> 
        {
            "id": 6,
            "post_text": "Guys will this code run? Exam rn need answer quick",
            "creation_time": "May 20, 2026",
            "post_attachment": "/res/images/badcode.png",
            "profile_picture": "/res/images/hacker.png"
        },*/
    })