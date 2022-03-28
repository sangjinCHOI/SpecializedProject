import { Route, Routes } from "react-router-dom";
import Bar from "./Bar";

import React from "react";
import UserReview from "./UserReview";
import UserInfo from "./UserInfo";
import UserLike from "./UserLike";
function Mypage() {
  return (
    <div>
      <Bar />
      <Routes>
        <Route index path="/" element={<UserReview />} />
        <Route path="/like" exact element={<UserLike />} />
        <Route path="/userInfo" exact element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default Mypage;
