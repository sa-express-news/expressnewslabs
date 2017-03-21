import React, { Component } from 'react';
import _ from 'lodash';

class PageWrapper extends Component {
  getPosts(postAction, filterAction, stateFields) {
    const { dispatch } = this.props;
    Promise.all([
      dispatch(postAction()),
      dispatch(filterAction())
    ]).then(() => this.setState(this.separatePosts(stateFields)))
  }

  isPostFeatured(post, features) {
    return _.find(features, feature => {
      return feature.post === post.id;
    });
  }

  separatePosts(stateFields) {
    const { features, posts } = this.props;
    return _.reduce(posts, (result, post) => {
      const featured = this.isPostFeatured(post, features);
      if (featured) {
        result.featuredPosts[featured.slug] = post;
      } else {
        result.standardPosts.push(post);
      }
      return result;
    }, stateFields);
  }

  render() {
    return <div>{this.props}</div>;
  }
}
export default PageWrapper
