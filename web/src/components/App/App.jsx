import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import actions from '../../actions';

import logo from '../../logo.svg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standardPosts: [],
      featuredPosts: { first: {}, second: {}, third: {} },
    };

    this.getFeaturedPosts = this.getFeaturedPosts.bind(this);
    // make app level functionality a wrapper for each page to combine its features with posts
  }

  componentDidMount() {
    const { dispatch } = this.props;
    Promise.all([
      dispatch(actions.post.fetchAllPosts()),
      dispatch(actions.homepageFeature.fetchAllHomepageFeatures())
    ]).then(this.getFeaturedPosts)
  }

  getFeaturedPosts() {
    const { features, posts } = this.props;
    let standardPosts = [];
    let featuredPosts = {};

    _.each(posts, post => {
      const feature = _.find(features, feature => {
        return feature.post === post.id;
      });
      if (feature) {
        featuredPosts[feature.slug] = post;
      } else {
        standardPosts.push(post);
      }
    });

    this.setState({
      standardPosts,
      featuredPosts,
    })
  }

  render() {
    const { featuredPosts, standardPosts } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">{featuredPosts.first.title}</p>
        <p className="App-intro">{featuredPosts.second.title}</p>
        <p className="App-intro">{featuredPosts.third.title}</p>
        {_.map(standardPosts, post => <p className="App-intro">{post.title}</p>)}
      </div>
    );
  }
}

App.propTypes = {
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
export default connect(mapStateToProps)(App)
