/**
 * @flow
 * @relayHash c3e46b4e54173e731f4cc3d994b0fa47
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UsersQueryResponse = {| |};
*/


/*
query UsersQuery(
  $count: Int!
  $cursor: String
  $queryString: String!
) {
  ...Users_data
}

fragment Users_data on Query {
  search(after: $cursor, first: $count, type: USER, query: $queryString) {
    edges {
      cursor
      node {
        __typename
        ...GitUser
        ... on Node {
          id
        }
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    ... on SearchResultItemConnection {
      edges {
        cursor
        node {
          __typename
          ... on Node {
            id
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
}

fragment GitUser on User {
  name
  email
  avatarUrl
  url
  bio
  company
  followers(first: 0) {
    totalCount
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cursor",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "queryString",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Users_data",
        "args": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "UsersQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cursor",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "queryString",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "UsersQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "query",
            "variableName": "queryString",
            "type": "String!"
          },
          {
            "kind": "Literal",
            "name": "type",
            "value": "USER",
            "type": "SearchType!"
          }
        ],
        "concreteType": "SearchResultItemConnection",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "SearchResultItemEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": null,
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "User",
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "email",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "avatarUrl",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "url",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "bio",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "company",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 0,
                            "type": "Int"
                          }
                        ],
                        "concreteType": "FollowerConnection",
                        "name": "followers",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "totalCount",
                            "storageKey": null
                          }
                        ],
                        "storageKey": "followers{\"first\":0}"
                      }
                    ]
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "startCursor",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "endCursor",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "hasPreviousPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "query",
            "variableName": "queryString",
            "type": "String!"
          },
          {
            "kind": "Literal",
            "name": "type",
            "value": "USER",
            "type": "SearchType!"
          }
        ],
        "handle": "connection",
        "name": "search",
        "key": "Users_search",
        "filters": [
          "type",
          "query"
        ]
      }
    ]
  },
  "text": "query UsersQuery(\n  $count: Int!\n  $cursor: String\n  $queryString: String!\n) {\n  ...Users_data\n}\n\nfragment Users_data on Query {\n  search(after: $cursor, first: $count, type: USER, query: $queryString) {\n    edges {\n      cursor\n      node {\n        __typename\n        ...GitUser\n        ... on Node {\n          id\n        }\n      }\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    ... on SearchResultItemConnection {\n      edges {\n        cursor\n        node {\n          __typename\n          ... on Node {\n            id\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}\n\nfragment GitUser on User {\n  name\n  email\n  avatarUrl\n  url\n  bio\n  company\n  followers(first: 0) {\n    totalCount\n  }\n}\n"
};

module.exports = batch;
