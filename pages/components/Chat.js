import styled from 'styled-components';
import { Avatar } from "@material-ui/core";
import getRecipientEmail from "../../utils/getRecipientEmail";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from "../../firebase-conf";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";

function Chat({ id, users }) {
  const [user] = useAuthState(auth);
  const userChatRef = collection(db, "users");
  const queryRef = query(
    userChatRef,
    where('email', '==', getRecipientEmail(users, user))
  );
  const [recipientSnapshot] = useCollection(queryRef);
  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(users, user);

  return (
    <Container>
        {recipient ? (<UserAvatar src={recipient?.photoURL} />) : <UserAvatar> {recipientEmail[0]} </UserAvatar> }
        <p>{recipientEmail}</p>
    </Container>
  )
}

export default Chat


const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;