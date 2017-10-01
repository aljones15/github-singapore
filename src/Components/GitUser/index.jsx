import React from 'react';
import {createFragmentContainer} from 'react-relay';

const GitUser = ({data}) => {
  return (
    <div>
     {data.name}
     {data.email}
     <figure><img src={data.avatarUrl} /> </figure>
    </div>
  );
};

export default createFragmentContainer(
  GitUser,
  graphql`fragment GitUser on User {
            name
            email
            avatarUrl
            url
            bio
            company
            followers(first: 0){
              totalCount
            }
          }`
);
