import React from 'react';
import {QueryRenderer, graphql} from 'react-relay';
import environment from 'Services/Environment/';
import {rootQuery, Users} from 'Containers/Pagination/Users';

/**
* Root is simply the QueryRender
* it takes in the network environment
* and inits the first calls to the github api
*/
class Root extends React.PureComponent{
  /**
  * render
  * @return {Object} a jsx element
  */
  render(){
    return(
      <div id='root' className='root container'>
        <QueryRenderer 
          environment={environment}
          query={rootQuery}
           variables={{count: 12, cursor: null, queryString: 'location:singapore'}}
           render={({error, props}) => {
             if(error){
               console.log('QueryRenderer -> error');
               console.error(error.source);
               return(
                 <div className='section is-danger'>
                   <h2 className='title'>There was an Error</h2>
                   <p>Check to see if your github api token is valid</p>
                   {error.message}
                 </div>);
             } else if(props){
               return(
                 <div>
                   <h1 className='title'>Users</h1>
                   <Users data={props} />                 
                 </div>   
              );
             }
             return(<div>Loading</div>);
           }}
        />
        {this.props.children}
      </div>
    );
  }
}

export default Root;
