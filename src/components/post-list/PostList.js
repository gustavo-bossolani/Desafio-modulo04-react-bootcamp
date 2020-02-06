import React, { Component } from 'react';

import Post from '../post/Post';

import profile from '../../assets/ds_avatar.jpg';
import commentProfile from '../../assets/ds_avatar4.png';
import commentProfile1 from '../../assets/ds_avatar2.jpg';
import commentProfile2 from '../../assets/ds_avatar5.jpg';
import commentProfile3 from '../../assets/ds_avatar6.jpg';
import commentProfile4 from '../../assets/ds_avatar7.jpg';
import commentProfile5 from '../../assets/ds_avatar8.jpg';

class PostList extends Component {

    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: "Shosão",
                    avatar: `${profile}`
                },
                date: "06 Fev 2020",
                content: `Galera tudo bem? Preciso de ajuda para farmar almas, 
                o André ta muito careiro ultimamente. Alguém disponível?`,
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Fire Keeper",
                            avatar: `${commentProfile}`
                        },
                        content: "Tentou falar com o Cavaleiro Kirk Shosão?"
                    },
                    {
                        id: 2,
                        author: {
                            name: "Sigward de Katarina",
                            avatar: `${commentProfile1}`
                        },
                        content: "Hmmmmm..."
                    },
                    {
                        id: 3,
                        author: {
                            name: "Lautrec",
                            avatar: `${commentProfile2}`
                        },
                        content: "Oi FireKeeper :)"
                    },
                    {
                        id: 4,
                        author: {
                            name: "Fire Keeper",
                            avatar: `${commentProfile}`
                        },
                        content: "Sai pra lá maníaco '-'"
                    },
                    {
                        id: 4,
                        author: {
                            name: "André",
                            avatar: `${commentProfile5}`
                        },
                        content: "x1?"
                    },
                ]
            },
            {
                id: 2,
                author: {
                    name: "Guerreiro Arthorias",
                    avatar: `${commentProfile3}`
                },
                date: "06 Fev 2020",
                content: `Oi, alguém viu meu cachorro ?`,
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Shosão",
                            avatar: `${profile}`
                        },
                        content: `Puts ...`
                    },
                ]
            },
        ]
    };

    render() {

        const { posts } = this.state;

        return (
            <div id="post-list">
                {posts.map(post => 
                    <Post
                        key={post.id}
                        post={post}
                    />
                )}
            </div>
        );
    }
}
export default PostList;