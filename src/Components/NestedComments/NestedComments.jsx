import React from "react";
import Comment from "./Comment";

const NestedComments = () => {
  const dummyComment = {
    id: 1,
    content: "This is a dummy comment",
    children: [
      {
        id: 2,
        content: "This is a child one of dummy comment",
        children: [
          {
            id: 3,
            content: "This is a child one of 'child one' of dummy comment",
            children: [],
          },
        ],
      },
      { id: 4, content: "This is a child two of dummy comment", children: [] },
      {
        id: 5,
        content: "This is a child three of dummy comment",
        children: [],
      },
    ],
  };
  const [input, setInput] = React.useState("");
  const [comments, setComments] = React.useState([dummyComment]);

  const handleAddNewComment = (updatedComments, parentCommentId, replyText) => {
    for (let i = 0; i < updatedComments.length; i++) {
      let comment = updatedComments[i];
      if (comment.id === parentCommentId) {
        const newComment = {
          id: Date.now(),
          content: replyText,
          children: [],
        };
        comment.children.unshift(newComment);
      }
    }
    for (let i = 0; i < updatedComments.length; i++) {
      let comment = updatedComments[i];
      handleAddNewComment(comment.children, parentCommentId, replyText);
    }
  };
  const handleAddReply = (parentCommentId, replyText) => {
    const updatedComments = [...comments];
    handleAddNewComment(updatedComments, parentCommentId, replyText);
    setComments(updatedComments);
  };

  return (
    <div className="w-full h-[100vh] bg-sky-300 flex items-center justify-center">
      <div className="w-[80%] bg-sky-500 flex flex-col p-2">
        <textarea
          name="input"
          id="input"
          placeholder="Write a comment."
          className="p-2 bg-gray-200 font-semibold text-zinc-800 outline-none"
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
        />
        <button
          onClick={() => {
            setComments((prevComment) => {
              const updatedComments = [...prevComment];
              updatedComments.unshift({
                id: Date.now(),
                content: input,
                children: [],
              });
              return updatedComments;
            });
            setInput("");
          }}
          className="px-3 py-2 bg-blue-700 font-medium text-white w-fit mt-2 rounded-md"
        >
          Add Comment
        </button>

        <div className="comments">
          {comments.map((comment, idx) => (
            <Comment key={idx} data={comment} handleAddReply={handleAddReply} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NestedComments;
