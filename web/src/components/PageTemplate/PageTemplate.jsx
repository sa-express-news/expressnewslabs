import React from 'react';
import _ from 'lodash';

import './PageTemplate.scss';

export default props => {
  const {featuredPosts, standardPosts} = props;
  return (
    <div className="content-wrapper">
      <div className="standard-post-list">
        {_.map(standardPosts, post => (
          <div key={post.id} className="post">
            <a href={post.story_link} target="_blank">
              <img className="image" src={post.main_img_url} />
              <div className="title">{post.title}</div>
            </a>
            <div className="excerpt">{post.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}