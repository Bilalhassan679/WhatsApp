import { API, graphqlOperation, Auth } from "aws-amplify";

export const getCommanChatRoomWithUser = async (userID) => {
  // get all chat room  of user1
  const authUser = await Auth.currentAuthenticatedUser();
  const response = await API.graphql(
    graphqlOperation(listChatRoom, { id: authUser.attributes.sub })
  );
  const allUserChatRooms = response.data?.getUser?.ChatRooms.items || [];

  const chatRoom = allUserChatRooms.find((chatRoomItem) => {
    return chatRoomItem.chatRoom.users.items.some(
      (userItem) => userItem.user.id === userID
    );
  });
  return chatRoom;
};

export const listChatRoom = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      ChatRooms {
        items {
          chatRoom {
            id
            users {
              items {
                user {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;
