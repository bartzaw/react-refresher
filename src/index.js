import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard"

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
            author="Janusz"
            timeAgo="Today at 4:45PM"
            userText="Oh buddy, you're rusty. You gotta code, dude!"
            userImage={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
            author="Aleksander"
             timeAgo="Today at 1AM"
            userText="Gonna be better with time"
            userImage={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
            author="Grażyna"
            timeAgo="Tomorrow at 12:00PM"
            userText="Simply amazing!"
            userImage={faker.image.avatar()}
            />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
            author="Karolina"
            timeAgo="Tomorrow at 12:00PM"
            userText="Wow!"
            userImage={faker.image.avatar()}
            />
       </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
