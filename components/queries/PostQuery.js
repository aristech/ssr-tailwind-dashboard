import { gql } from "@apollo/client";

export const ALL_POSTS_QUERY = gql`
  query posts {
    allPosts {
      title
      description
      id
    }
  }
`;
