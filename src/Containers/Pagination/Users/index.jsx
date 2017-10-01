import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
import GitUser from 'Components/GitUser';

// this is so the QueryRenderer and the pageination container
// both use the same query
export const rootQuery = graphql`
  query UsersQuery(
    $count: Int!
    $cursor: String
    $queryString: String!
    ){
      ...Users_data
    }`;

// just a place to store the func we pass to the event
let scrollFunc;

/**
* UsersView paginates the GitHub Users
* it also loads new users on scroll
* @param {Object} props
*/
class UsersView extends React.Component {
  /** constructor takes the props and sets the state
  * @param {Object} props
  */
  constructor(props) {
    super(props);
  }
  /** scrollLoad creates a psuedo-infinite scroll effect
  * @param {Object} event
  */
  scrollLoad(event) {
    var body = document.body,
      html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, 
     html.clientHeight, html.scrollHeight, html.offsetHeight);
    const height = docHeight - window.innerHeight;
    const percentLeft = event.pageY / height;
    if (!this.props.relay.isLoading() && percentLeft > 0.4) {
      this._loadMore();
    }
  }
  // componentWillMount sets up the scroll loader
  componentWillMount() {
    scrollFunc = this.scrollLoad.bind(this);
    window.addEventListener('scroll', scrollFunc);
  }
  // componentWillUmount removes the scroll loader
  componentWillUnmount() {
    window.removeEventListener('scroll', scrollFunc);
  }
  // makeUsers maps the data from props to the fragment container
  makeUsers() {
    if(this.props.data.search) {
      return this.props.data.search.edges.map(
        (r, index) => <GitUser order={index} data={r.node} key={r.cursor + '_' + index}></GitUser>
      );
    } return null;
  }
  /**
  * renders the paginated users
  * @return {Object} jsx component
  */
  render(){
    return(
      <div
        id='users_paginate' 
        className='columns is-multiline'
      >
        {this.makeUsers()}
        <button
          className='column button is-primary is-focused'
          onClick={() => this._loadMore()}
        > <strong>More</strong> </button>
      </div>);
  }
  // _loadMore checks relay if there is more to load and if we are loading then it
  // then it loads more
  _loadMore(){
    if(!this.props.relay.hasMore() || this.props.relay.isLoading()){
      return;
    }
    this.props.relay.loadMore(
      12, // Fetch the next 12 feed items
      (e) => {},
    );
  }
}

/**
* Users is pagination container that
* links the graphql paginate fragment to a view
* the Users_data means it takes binds the result to the data prop
* the @connection Users_search means it binds the paginated results
* to the search props
*/
export const Users = createPaginationContainer(
  UsersView,
  {
    data: graphql`
      fragment Users_data on Query {
              search(after: $cursor, first: $count, type: USER, query: $queryString) @connection(key: "Users_search"){ 
                edges {
                  cursor
                  node {
                    ...GitUser 
                  } 
                }
                pageInfo {
                  startCursor
                  endCursor
                  hasNextPage
                  hasPreviousPage
                }
              }
          }`
  },
  {
    direction: 'forward',
    getConnectionFromProps(props){
      if(props.data && props.data.search) {
        return props.data.search;
      }
      if(props.data) {
        return props.data;
      }
      return props;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      };
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      return {
        count,
        cursor,
        queryString: 'location:singapore'
      };
    },
    query: rootQuery  }
)
