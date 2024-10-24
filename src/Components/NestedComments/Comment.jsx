import React from "react";

const Comment = ({ data, handleAddReply }) => {
  const [reply, setReply] = React.useState("");
  const [showReplyBox, setShowReplyBox] = React.useState(false);

  return (
    <div>
      <div>
        <li className="" key={data.id}>
          {data.content}
          {!showReplyBox && (
            <button
              onClick={() => setShowReplyBox(true)}
              className="px-1 py-1 bg-blue-600 text-sm text-white w-fit mt-2 rounded-md ml-2"
            >
              Add A Reply
            </button>
          )}
        </li>
        <div>
          {showReplyBox && (
            <div className="flex items-center gap-2">
              <textarea
                name="reply"
                onChange={(ev) => setReply(ev.target.value)}
                id="reply"
                placeholder="Write a reply."
                className="p-2 bg-gray-200 font-medium text-zinc-800 outline-none w-1/2 h-10 text-sm rounded-md"
                value={reply}
              />

              <button
                onClick={() => {
                  handleAddReply(data.id, reply);
                  setShowReplyBox(false);
                  setReply("");
                }}
                className="text-white bg-green-400 px-1 py-1 text-sm w-fit rounded-md"
              >
                Add
              </button>
              <button
                onClick={() => {
                  setShowReplyBox(false);
                  setReply("");
                }}
                className="text-white bg-red-400 px-1 py-1 text-sm w-fit rounded-md"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        {data && data?.children?.length > 0 && (
          <div className="ml-4">
            {data.children.map((child) => (
              <Comment
                key={child.id}
                data={child}
                handleAddReply={handleAddReply}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
