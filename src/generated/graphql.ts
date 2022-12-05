/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  createWord: Word;
  deleteWord: Scalars["Boolean"];
  updateWord?: Maybe<Word>;
};

export type MutationCreateWordArgs = {
  definition: Scalars["String"];
  translation?: InputMaybe<Scalars["String"]>;
  word: Scalars["String"];
  wordImageUrl?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteWordArgs = {
  id: Scalars["Float"];
};

export type MutationUpdateWordArgs = {
  definition?: InputMaybe<Scalars["String"]>;
  id: Scalars["Float"];
  translation?: InputMaybe<Scalars["String"]>;
  word?: InputMaybe<Scalars["String"]>;
  wordImageUrl?: InputMaybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  word?: Maybe<Word>;
  words: Array<Word>;
};

export type QueryWordArgs = {
  id: Scalars["Float"];
};

export type Word = {
  __typename?: "Word";
  definition: Scalars["String"];
  id: Scalars["Int"];
  translation?: Maybe<Scalars["String"]>;
  word: Scalars["String"];
  wordImageUrl?: Maybe<Scalars["String"]>;
};

export type FetchWordsQueryVariables = Exact<{ [key: string]: never }>;

export type FetchWordsQuery = {
  __typename?: "Query";
  words: Array<{
    __typename?: "Word";
    id: number;
    word: string;
    definition: string;
    wordImageUrl?: string | null;
    translation?: string | null;
  }>;
};

import { IntrospectionQuery } from "graphql";
export default {
  __schema: {
    queryType: {
      name: "Query",
    },
    mutationType: {
      name: "Mutation",
    },
    subscriptionType: null,
    types: [
      {
        kind: "OBJECT",
        name: "Mutation",
        fields: [
          {
            name: "createWord",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Word",
                ofType: null,
              },
            },
            args: [
              {
                name: "definition",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "translation",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "word",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "wordImageUrl",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "deleteWord",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateWord",
            type: {
              kind: "OBJECT",
              name: "Word",
              ofType: null,
            },
            args: [
              {
                name: "definition",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "translation",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "word",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "wordImageUrl",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "Query",
        fields: [
          {
            name: "word",
            type: {
              kind: "OBJECT",
              name: "Word",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "words",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Word",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "Word",
        fields: [
          {
            name: "definition",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "translation",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "word",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "wordImageUrl",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "SCALAR",
        name: "Any",
      },
    ],
    directives: [],
  },
} as unknown as IntrospectionQuery;

export const FetchWordsDocument = gql`
  query FetchWords {
    words {
      id
      word
      definition
      wordImageUrl
      translation
    }
  }
`;

export function useFetchWordsQuery(
  options?: Omit<Urql.UseQueryArgs<FetchWordsQueryVariables>, "query">
) {
  return Urql.useQuery<FetchWordsQuery, FetchWordsQueryVariables>({
    query: FetchWordsDocument,
    ...options,
  });
}
