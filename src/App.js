import React from 'react';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCards from './ApprovalCards';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCards>

        <div>
          <h4>
             Warning! 
          </h4>
          Are you sure want to do this?
        </div>

      </ApprovalCards>
      
      <ApprovalCards>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM "
          content="Nice Blog Post"
          avatar={faker.image.image()}
        />
      </ApprovalCards>
      <ApprovalCards>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 5:45PM "
          content="I like the subject"
          avatar={faker.image.image()}
        />
      </ApprovalCards>
      <ApprovalCards>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 6:45PM "
          content="I like the writing"
          avatar={faker.image.image()}
        />
      </ApprovalCards>
    </div>

  )
}

export default App

