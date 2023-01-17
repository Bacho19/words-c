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

export type Error = {
  __typename?: "Error";
  field: Scalars["String"];
  message: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  changePassword: UserResponse;
  createWord: Word;
  deleteWord: Scalars["Boolean"];
  forgotPassword: Scalars["Boolean"];
  login: UserResponse;
  logout: Scalars["Boolean"];
  register: UserResponse;
  updateWord?: Maybe<Word>;
};

export type MutationChangePasswordArgs = {
  newPassword: Scalars["String"];
  token: Scalars["String"];
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

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationLoginArgs = {
  emailOrUsername: Scalars["String"];
  password: Scalars["String"];
};

export type MutationRegisterArgs = {
  options: UsernameAuthInput;
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
  me?: Maybe<User>;
  word?: Maybe<Word>;
  words: Array<Word>;
};

export type QueryWordArgs = {
  id: Scalars["Float"];
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["String"];
  email: Scalars["String"];
  id: Scalars["Int"];
  updatedAt: Scalars["String"];
  username: Scalars["String"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  errors?: Maybe<Array<Error>>;
  user?: Maybe<User>;
};

export type UsernameAuthInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type Word = {
  __typename?: "Word";
  createdAt: Scalars["String"];
  definition: Scalars["String"];
  id: Scalars["Int"];
  translation?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["String"];
  word: Scalars["String"];
  wordImageUrl?: Maybe<Scalars["String"]>;
};

export type RegularUserFragment = {
  __typename?: "User";
  id: number;
  username: string;
  email: string;
} & { " $fragmentName"?: "RegularUserFragment" };

export type ChangePasswordMutationVariables = Exact<{
  newPassword: Scalars["String"];
  token: Scalars["String"];
}>;

export type ChangePasswordMutation = {
  __typename?: "Mutation";
  changePassword: {
    __typename?: "UserResponse";
    user?:
      | ({ __typename?: "User" } & {
          " $fragmentRefs"?: { RegularUserFragment: RegularUserFragment };
        })
      | null;
    errors?: Array<{
      __typename?: "Error";
      field: string;
      message: string;
    }> | null;
  };
};

export type CreateWordMutationVariables = Exact<{
  definition: Scalars["String"];
  word: Scalars["String"];
  translation?: InputMaybe<Scalars["String"]>;
  wordImageUrl?: InputMaybe<Scalars["String"]>;
}>;

export type CreateWordMutation = {
  __typename?: "Mutation";
  createWord: {
    __typename?: "Word";
    id: number;
    word: string;
    definition: string;
    translation?: string | null;
    wordImageUrl?: string | null;
  };
};

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars["String"];
}>;

export type ForgotPasswordMutation = {
  __typename?: "Mutation";
  forgotPassword: boolean;
};

export type LoginMutationVariables = Exact<{
  emailOrUsername: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "UserResponse";
    user?:
      | ({ __typename?: "User" } & {
          " $fragmentRefs"?: { RegularUserFragment: RegularUserFragment };
        })
      | null;
    errors?: Array<{
      __typename?: "Error";
      field: string;
      message: string;
    }> | null;
  };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: "Mutation"; logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: UsernameAuthInput;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "UserResponse";
    user?:
      | ({ __typename?: "User" } & {
          " $fragmentRefs"?: { RegularUserFragment: RegularUserFragment };
        })
      | null;
    errors?: Array<{
      __typename?: "Error";
      field: string;
      message: string;
    }> | null;
  };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?:
    | ({ __typename?: "User" } & {
        " $fragmentRefs"?: { RegularUserFragment: RegularUserFragment };
      })
    | null;
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
        name: "Error",
        fields: [
          {
            name: "field",
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
            name: "message",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "Mutation",
        fields: [
          {
            name: "changePassword",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "newPassword",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "token",
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
            name: "forgotPassword",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [
              {
                name: "email",
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
            name: "login",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "emailOrUsername",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "password",
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
            name: "logout",
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
            name: "register",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "options",
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
            name: "me",
            type: {
              kind: "OBJECT",
              name: "User",
              ofType: null,
            },
            args: [],
          },
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
        name: "User",
        fields: [
          {
            name: "createdAt",
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
            name: "email",
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
            name: "updatedAt",
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
            name: "username",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserResponse",
        fields: [
          {
            name: "errors",
            type: {
              kind: "LIST",
              ofType: {
                kind: "NON_NULL",
                ofType: {
                  kind: "OBJECT",
                  name: "Error",
                  ofType: null,
                },
              },
            },
            args: [],
          },
          {
            name: "user",
            type: {
              kind: "OBJECT",
              name: "User",
              ofType: null,
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
            name: "createdAt",
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
            name: "updatedAt",
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
export const RegularUserFragmentDoc = gql`
  fragment RegularUser on User {
    id
    username
    email
  }
`;
export const ChangePasswordDocument = gql`
  mutation ChangePassword($newPassword: String!, $token: String!) {
    changePassword(newPassword: $newPassword, token: $token) {
      user {
        ...RegularUser
      }
      errors {
        field
        message
      }
    }
  }
  ${RegularUserFragmentDoc}
`;

export function useChangePasswordMutation() {
  return Urql.useMutation<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >(ChangePasswordDocument);
}
export const CreateWordDocument = gql`
  mutation CreateWord(
    $definition: String!
    $word: String!
    $translation: String
    $wordImageUrl: String
  ) {
    createWord(
      definition: $definition
      word: $word
      translation: $translation
      wordImageUrl: $wordImageUrl
    ) {
      id
      word
      definition
      translation
      wordImageUrl
    }
  }
`;

export function useCreateWordMutation() {
  return Urql.useMutation<CreateWordMutation, CreateWordMutationVariables>(
    CreateWordDocument
  );
}
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export function useForgotPasswordMutation() {
  return Urql.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument);
}
export const LoginDocument = gql`
  mutation Login($emailOrUsername: String!, $password: String!) {
    login(emailOrUsername: $emailOrUsername, password: $password) {
      user {
        ...RegularUser
      }
      errors {
        field
        message
      }
    }
  }
  ${RegularUserFragmentDoc}
`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument
  );
}
export const RegisterDocument = gql`
  mutation Register($options: UsernameAuthInput!) {
    register(options: $options) {
      user {
        ...RegularUser
      }
      errors {
        field
        message
      }
    }
  }
  ${RegularUserFragmentDoc}
`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument
  );
}
export const MeDocument = gql`
  query Me {
    me {
      ...RegularUser
    }
  }
  ${RegularUserFragmentDoc}
`;

export function useMeQuery(
  options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, "query">
) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({
    query: MeDocument,
    ...options,
  });
}
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
