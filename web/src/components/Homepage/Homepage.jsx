import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

import PageWrapper from '../PageWrapper/PageWrapper';
import PageTemplate from '../PageTemplate/PageTemplate';

class Homepage extends PageWrapper {
  constructor(props) {
    super(props);
    this.state = {
      standardPosts: [],
      featuredPosts: { first: {}, second: {}, third: {} },
    };
  }

  componentDidMount() {
    const { featuredPosts, standardPosts } = this.state;
    this.getPosts(
      actions.post.fetchAllPosts,
      actions.homepageFeature.fetchAllHomepageFeatures,
      { featuredPosts, standardPosts }
    );
  }

  render() {
    const { featuredPosts, standardPosts } = this.state;

    return (
      <PageTemplate 
        featuredPosts={featuredPosts}
        standardPosts={standardPosts}
      />
    );
  }
}

Homepage.propTypes = {
  posts: PropTypes.array.isRequired,
  fetchingPosts: PropTypes.bool.isRequired,
  features: PropTypes.array.isRequired,
  fetchingFeatures: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = store => {
  return { 
    posts: store.post.list,
    fetchingPosts: store.post.isFetching,
    features: store.homepageFeature.list,
    fetchingFeatures: store.homepageFeature.isFetching,
  }
};
export default connect(mapStateToProps)(Homepage)
