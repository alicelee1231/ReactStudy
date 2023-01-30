import React from "react";
import Comment from "./Comment";

// function CommentList(props) {
//     return (
//         <div>
//             <Comment name={"이샘미"} comment = {"안녕하세요, 쨈미에요."}  />
//             <Comment name={"쨈미"} comment = {"쨈미는 리액트 신이 될거에요."}  />

//         </div>
//     )
// }

const comments = [
    {
        name:"이샘미",
        comment: "안녕",
    },
    {
        name : "이쨈미",
        comment: "리엑트 가즈아ㅏㅏㅏㅏㅏㅏ",
    },
    {
        name : "방탄",
        comment: "응그래",
    },
];
function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name ={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;