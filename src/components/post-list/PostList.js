import React, { Component } from 'react';

import profile from '../../assets/ds_avatar.jpg';

import './PostList.css';

class PostList extends Component {

    state = {
        posts: []
    };

    render() {
        return (
            <div id="post-list">
                <container>
                    <div>
                        <img src={profile} alt="profile" id="profile-img" />
                        <div id="profile-header">
                            <p id="profile-name">Shosão</p>
                            <p id="profile-date">05 Fev 2020</p>
                        </div>
                        <div id="profiler-message">
                            <p id="message">
                                Galera preciso de ajuda para farmar almas,
                                 o André ta muito careiro ultimamente. Alguém disponível?
                            </p>
                        </div>
                    </div>
                    <hr id="division"/>
                </container>
                <PostComment />
            </div>
        );
    }
}
export default PostList;