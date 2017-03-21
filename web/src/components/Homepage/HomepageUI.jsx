import React from 'react';
import _ from 'lodash';

export default props => {
    const {featuredPosts, standardPosts} = props;
    return (
      <div>
        <p className="App-intro">{featuredPosts.first.title}</p>
        <p className="App-intro">{featuredPosts.second.title}</p>
        <p className="App-intro">{featuredPosts.third.title}</p>
        {_.map(standardPosts, post => <p key={post.id} className="App-intro">{post.title}</p>)}
      </div>
    );
}