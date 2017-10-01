import React from 'react';
import {createFragmentContainer} from 'react-relay';

const GitUser = ({order, data}) => {
  const defaultPic = 'http://s3.amazonaws.com/cdn.roosterteeth.com/default/tb/user_profile_male.jpg';
  const profilePic = data.avatarUrl ? data.avatarUrl : defaultPic;
  let cardClass = 'column card card-shadow is-one-third';
  return (
    <div className={cardClass}>
      <header className='card-header'>
        <p className='card-header-title'>
          {data.name}
        </p>
      </header>
      <div className='card-image'>
        <figure className='image'>
          <img src={profilePic} /> 
        </figure>
      </div>
      <div className='content card-content'>
        <p>Bio: {data.bio} </p>
        <p>Followers: {data.followers.totalCount}</p>
      </div>
      <footer className="card-footer">
        <a href={data.url} className="card-footer-item">Code</a>
      </footer>
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
