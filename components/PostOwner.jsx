import React from "react";
import Comment from "./Comment";

export default function PostOwner(props) {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={props.imgSrc}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5 text-white">{props.userName}</span>
      </div>
      <span className="text-white">{props.status}</span>
      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span style={{ color: "#B0B3B8" }}>{props.likesCount} คน</span>
      </div>
      <hr className="m-0 border" />

      {/* Comments, just in case */}
      {props.comments.map((c) => (
        <Comment
          imgSrc={c.userImagePath}
          userName={c.username}
          status={c.replyText}
          likesCount={c.likeNum}
          replies={c.replies}
        />
      ))}
    </div>
  );
}
