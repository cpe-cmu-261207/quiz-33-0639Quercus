import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  return (
    <div>
      {/* Entire Comment div */}
      <div className="d-flex gap-2 my-2">
        <img
          src={props.imgSrc}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            {props.userName}
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>{props.status}</span>
          {props.likesCount > 0 && (
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>{props.likesCount} คน</span>
            </div>
          )}
        </div>
      </div>

      {/* Replies */}
      {props.replies.map((r, i) => (
        <Reply
          key={i + r.username + r.replyText + r.likeNum}
          imgSrc={r.userImagePath}
          userName={r.username}
          status={r.replyText}
          likesCount={r.likeNum}
        />
      ))}
    </div>
  );
}
