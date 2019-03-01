import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () =>{
    return(
      <div className ="ui container comments">
        <ApprovalCard>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author={faker.name.firstName()} timeAgo="Today at 4:47PM" comment="Cool" image={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author={faker.name.firstName()} timeAgo="Today at 4:58PM" comment="I cant read." image={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author={faker.name.firstName()} timeAgo="Today at 4:49PM" comment="Shine baby sparkle baby" image={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author={faker.name.firstName()} timeAgo="Today at 4:45PM" comment="Nice blog post!" image={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author={faker.name.firstName()} timeAgo="Today at 5:00PM" comment="I'ma gonna getcha!" image={faker.image.avatar()}/>
        </ApprovalCard>
      </div>
    );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

//https://semantic-ui.com/
