import React, { useState, useEffect } from "react";
import { AxiosWithAuth } from "../utils/AxiosWithAux.js";
import Friend from "./Friend.js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FriendDashboard = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    AxiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => console.log("Error from Friend Dashboard GET call", err));
  }, []);

  console.log("Friends from Dashboard.js", friends);

  return (
    <div>
      <strong>My Friends</strong>
      {friends.length > 0 ? (
        friends.map(friend => (
          <Card
            className="friendCard"
            key={friend.id}
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title>{friend.name}</Card.Title>
              <Card.Text>{friend.age}</Card.Text>
              <Button variant="primary">{friend.email}</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FriendDashboard;
{
  /* <Friend key={friend.id} friend={friend} /> */
}
