import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
import GitUser from 'Components/GitUser';

export const rootQuery = graphql`
  query UsersQuery(
    $count: Int!
    $cursor: String
    $queryString: String!
    ){
      ...Users_data
    }`;

class UsersView extends React.Component {
  makeUsers() {
    if(this.props.data.search) {
      return this.props.data.search.edges.map(
        (r, index) => <GitUser order={index} data={r.node} key={r.cursor + '_' + index}></GitUser>
      );
    } return null;
  }
  render(){
    return(
      <div className='columns is-multiline' onScroll={(e) => { console.log('scroll'); }}>
        {this.makeUsers()}
        <button
          className='column button is-primary is-focused'
          onClick={() => this._loadMore()}
        > <strong>More</strong> </button>
      </div>);
  }
  _loadMore(){
    if(!this.props.relay.hasMore() || this.props.relay.isLoading()){
      return;
    }

    this.props.relay.loadMore(
      12, // Fetch the next 10 feed items
      (e) => {console.log(e);},
    );
  }
}

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
