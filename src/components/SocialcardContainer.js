import { FaDev } from "react-icons/fa";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./redux";

function SocialcardContainer({ postData, fetchPosts }) {
  useEffect(() => {
    fetchPosts();
  }, []);
  return postData.loading ? (
    <h2>loading</h2>
  ) : postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
    <div>
      {postData &&
        postData.posts &&
        postData.posts.map((post) => (
          <div>
            {" "}
            <strong>{post.userId}</strong> @{post.userId} .Sep10
            <div>{post.title}</div>
            <div>
              {"{"}author : {post.userId}
              {"}"}
            </div>
            <div className="border rounded">
              <div className="jumbotron">
                <FaDev size="5rem" color="black" />
                <p>
                  <b>{post.title}</b>
                </p>
                {post.userId}
              </div>
              <div>
                <b>{post.title}</b>
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    postData: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialcardContainer);
