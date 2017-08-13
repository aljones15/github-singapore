import React from 'react';
import {QueryRenderer, graphql} from 'react-relay';
import environment from 'Services/Environment/';
import RepoPages from 'Containers/Pagination/Repos';

class Root extends React.PureComponent{
  render(){
    return(
      <div id='root' className='root'>
        <QueryRenderer 
          environment={environment}
          query={graphql`
            query RootQuery {
              viewer {
                login
              }
            }
          `}
           render={({error, props}) => {
             if(error){
               console.log('QueryRenderer -> error');
               console.error(error);
               return(<div>Error</div>);
             } else if(props){
               console.log(props);
               return(
                 <div>
                 Success
                 <RepoPages user={{}} />
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
