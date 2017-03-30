import React, { Component } from 'react';
import _ from 'lodash';

class PageWrapper extends Component {
  /*
   * This is a utility class intended for use as a base for all 
   * standard pages (pages using the same format as the hompage).
   * The only method intended for public use is 'getPosts'.
   * GetPosts is used to retrieve a list of posts and a list
   * of featured post IDs. It then compares the list of featured
   * IDs against the post IDs and splits the posts into two different
   * the 'featuredPost' and 'standardPost' properties expected to
   * exist on in the stateFields object parameter
   */

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
