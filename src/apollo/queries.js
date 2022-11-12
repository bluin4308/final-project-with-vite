import { gql } from "@apollo/client";

const GET_ITEMS = gql`
  query GET_ITEMS(
    $tags: [String]
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    clothes(
      first: $first
      last: $last
      after: $after
      before: $before
      where: { tagSlugAnd: $tags }
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
        customFields {
          price
          saleprice
        }
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
`;

const SEARCH_ITEMS = gql`
  query SEARCH_ITEMS($search: String) {
    clothes(where: { search: $search }) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
        customFields {
          price
          saleprice
        }
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
`;

const GET_CART_ITEMS = gql`
  query GET_CART_ITEMS($array: [ID]) {
    clothes(where: { in: $array }) {
      nodes {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
        customFields {
          price
          saleprice
        }
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export { GET_ITEMS, SEARCH_ITEMS, GET_CART_ITEMS };
