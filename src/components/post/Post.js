import React from 'react';

import Comment from '../comment/Comment';

import './Post.css';

function Post({ post }) {
    return (
        <div id={"post-" + post.id}>
            <container id="post-body">
                <div id="post-header">
                    <img src={post.author.avatar} alt="profile" id="profile-img" />
                    <div id="profile-header">
                        <span id="profile-name">{post.author.name}</span>
                        <p id="profile-date">{post.date}</p>
                    </div>
                    <div id="profiler-message">
                        <p id="message">{post.content}</p>
                    </div>
                </div>
                <hr id="division" />
                <div id="comments">
                    {post.comments.map(comment =>
                        <Comment
                            key={comment.id}
                            comment={comment} />
                    )}
                </div>
            </container>
        </div>
    );
}
export default Post;