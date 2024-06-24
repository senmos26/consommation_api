import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import Posts from "./Posts";

export default function User({ user, ShowPosts, posts }) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  const handleShowPost = (id) => {
    ShowPosts(id);
    setShow(!show);
  };

  return (
    <div className="user">
      {loading ? (
        <div>
          <p><Skeleton width={200} /></p>
          <p><Skeleton width={200} /></p>
          <p><Skeleton width={200} /></p>
          <Skeleton width={100} height={40} />
        </div>
      ) : (
        user && (
          <div>
            <p>nom: {user.name}</p>
            <p>prenom: {user.username}</p>
            <p>ville: {user.address ? user.address.city : ""}</p>
            {posts && <button onClick={() => handleShowPost(user.id)}>details posts</button>}
            {show && <Posts posts={posts} />}
          </div>
        )
      )}
    </div>
  );
}
