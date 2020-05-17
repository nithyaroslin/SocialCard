import { FaDev, FaRegComment, FaRetweet, FaHeart } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./redux";
import { fetchUsers } from "./redux";

function SocialcardContainer({ postData, userData, fetchPosts, fetchUsers }) {
  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, []);
  return postData.loading && userData.loading ? (
    <h2>loading</h2>
  ) : postData.error || userData.error ? (
    <h2>
      Posts - {postData.error}
      Users - {userData.error}
    </h2>
  ) : (
    <div>
      {postData &&
        userData &&
        postData.posts &&
        userData.users &&
        postData.posts.map((post) =>
          post.userId === 1 ? (
            <div>
              <strong>{userData.users.name}</strong> @{userData.users.name}{" "}
              .Sep10
              <div>{post.title}</div>
              <div>
                {"{"}author : {userData.users.username}
                {"}"}
              </div>
              <div className="border rounded">
                <div className="jumbotron">
                  <FaDev size="5rem" color="black" />
                  <p>
                    <b>{post.title}</b>
                  </p>
                  <p text-align="right">{userData.users.name}</p>
                </div>
                <div>
                  <b>{post.title}</b>
                  <p>{post.body}</p>
                  <p>{userData.users.website}</p>
                </div>
                <div></div>
              </div>
              <div className="container" margin="t-2">
                <div className="row">
                  <div className="col-2">
                    <FaRegComment background-color="white" size="1.5rem" /> 2
                  </div>
                  <div className="col-2">
                    <FaRetweet color="green" size="1.5rem" /> 47
                  </div>
                  <div className="col-2">
                    <FaHeart color="red" size="1.5rem" /> 190
                  </div>
                  <div className="col-2">
                    <FiMail background-color="white" size="1.5rem" />
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ) : (
            ""
          )
        )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    postData: state.post,
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialcardContainer);
