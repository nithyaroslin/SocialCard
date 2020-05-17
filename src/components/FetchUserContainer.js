import { FaDev } from "react-icons/fa";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./redux";
import { fetchUsers } from "./redux";

function FetchUserContainer({ postData, userData, fetchPosts, fetchUsers }) {
  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, []);

  const getUserName = (userId) => {
    console.log("userId : " + userId);
    const index = userData.users.findIndex((user) => user.id === userId);
    console.log("index : " + index);
    console.log("userName: " + userData.users[index].name);
    return userData.users[index].name;
  };

  return (
    <div>
      {() => {
        const user = userData.users.find((user) => {
          return user.id === 1 ? <h2>{user.name}</h2> : <h2>not found </h2>;
        });
        console.log(user);
        return user.name;
      }}
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

export default connect(mapStateToProps, mapDispatchToProps)(FetchUserContainer);
