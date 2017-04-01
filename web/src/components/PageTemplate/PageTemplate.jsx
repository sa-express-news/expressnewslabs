import React from 'react';
import _ from 'lodash';
import './PageTemplate.scss';

export default props => {
  const { subfeatures, standardPosts } = props;

  return (
    <div className="lists-wrapper">
      <div className="featured-post-list">
        {_.map(subfeatures, (post, key) => (
          <div key={key} className="post">
            <a href={post.story_link} target="_blank">
              <div className="image">
                <img src={post.main_img_url} alt={post.title} />
              </div>
              <div className="title">{post.title}</div>
            </a>
            <div className="excerpt">{post.description}</div>
          </div>
        ))}
      </div>

      <div className="standard-post-list">
        {_.map(standardPosts, (post, key) => (
          <div key={key} className="post">
            <a href={post.story_link} target="_blank">
              <div className="image">
                <img src={post.main_img_url} alt={post.title} />
              </div>
              <div className="title">{post.title}</div>
            </a>
            <div className="excerpt">{post.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}