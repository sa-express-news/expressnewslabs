import React from 'react';
import _ from 'lodash';
import { GridList, GridTile } from 'material-ui/GridList';

import './PageTemplate.scss';

export default props => {
    const {featuredPosts, standardPosts} = props;
    return (
      <div className="content-wrapper">
        <div className="standard-post-list">
          <GridList
            cellHeight={280}
            className="grid-list"
            cols={3}
            padding={10}
          >
            {_.map(standardPosts, post => (
              <GridTile
                key={post.id}
                title={post.title}
                subtitle={post.description}
              >
                <img src={post.main_img_url} />
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    );
}