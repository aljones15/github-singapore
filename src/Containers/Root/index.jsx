import React from 'react';
import {QueryRenderer, graphql} from 'react-relay';
import environment from 'Services/Environment/';
import {rootQuery, Users} from 'Containers/Pagination/Users';
class Root extends React.PureComponent{
  render(){
    return(
      <div id='root' className='root'>
        <QueryRenderer 
          environment={environment}
          query={rootQuery}
           variables={{count: 10, cursor: null, queryString: 'location:singapore'}}
           render={({error, props}) => {
             if(error){
               console.log('QueryRenderer -> error');
               console.error(error);
               return(<div>Error</div>);
             } else if(props){
               return(
                 <div>
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
