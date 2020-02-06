import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

function Comment({ comment }) {
    return (
        <div id={"comment-" + comment.id}>
            <img src={comment.author.avatar}
                alt="profile-comment-photo"
                id="profile-comment-photo" />
            <container id="comment-content">
                <span id="comment-profile-name">{comment.author.name}</span>
                <p id="comment-profile-content">
                    {comment.content}
                </p>
            </container>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
}
export default Comment;