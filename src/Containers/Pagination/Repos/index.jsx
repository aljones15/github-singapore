import React from 'react';
import { createPaginationContainer, graphql } from 'react-relay';

class RepoView extends React.Component {
  render(){
    return(
      <div>
        Repo
        <button
          onClick={() => this._loadMore()}
          title="Load More"
        />
      </div>);
  }
  _loadMore(){
    if(!this.props.relay.hasMore() || this.props.relay.isLoading()){
      return;
    }

    this.props.relay.loadMore(
      2, // Fetch the next 2 feed items
      e => {
        console.log(e);
      },
    );
  }
}

const Repos = createPaginationContainer(
  RepoView,
  {
    user: graphql`
      fragment Repos_user on User {
        repositories(first: $count after: $cursor) @connection(key: "Repos_repositories") {
          edges {
            node {
              id
              name
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }`
  },
  {
    direction: 'forward',
    getConnectionFromProps(props){
      console.log('getConnectionFromProps');
      console.log(props);
      return props.user && props.user.repos;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      return {
        count,
        cursor,
      };
    },
    query: graphql`
      query ReposQuery(
        $count: Int!
        $cursor: String
      ){
         viewer{
           ...Repos_user
         }
       }
    `
  }
)

export default Repos;
