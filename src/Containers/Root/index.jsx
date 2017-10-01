import React from 'react';
import {QueryRenderer, graphql} from 'react-relay';
import environment from 'Services/Environment/';
import {rootQuery, Users} from 'Containers/Pagination/Users';
class Root extends React.PureComponent{
  render(){
    return(
      <div id='root' className='root container' onScroll={(e) => { console.log('scroll'); }}>
        <QueryRenderer 
          environment={environment}
          query={rootQuery}
           variables={{count: 12, cursor: null, queryString: 'location:singapore'}}
           render={({error, props}) => {
             if(error){
               console.log('QueryRenderer -> error');
               console.error(error);
               return(<div>Error</div>);
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
