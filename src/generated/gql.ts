/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "fragment RegularUser on User {\n  id\n  username\n  email\n}": types.RegularUserFragmentDoc,
    "mutation ChangePassword($newPassword: String!, $token: String!) {\n  changePassword(newPassword: $newPassword, token: $token) {\n    user {\n      ...RegularUser\n    }\n    errors {\n      field\n      message\n    }\n  }\n}": types.ChangePasswordDocument,
    "mutation CreateWord($definition: String!, $word: String!, $translation: String, $wordImageUrl: String) {\n  createWord(\n    definition: $definition\n    word: $word\n    translation: $translation\n    wordImageUrl: $wordImageUrl\n  ) {\n    id\n    word\n    definition\n    translation\n    wordImageUrl\n  }\n}": types.CreateWordDocument,
    "mutation ForgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}": types.ForgotPasswordDocument,
    "mutation Login($emailOrUsername: String!, $password: String!) {\n  login(emailOrUsername: $emailOrUsername, password: $password) {\n    user {\n      ...RegularUser\n    }\n    errors {\n      field\n      message\n    }\n  }\n}": types.LoginDocument,
    "mutation Logout {\n  logout\n}": types.LogoutDocument,
    "mutation Register($options: UsernameAuthInput!) {\n  register(options: $options) {\n    user {\n      ...RegularUser\n    }\n    errors {\n      field\n      message\n    }\n  }\n}": types.RegisterDocument,
    "query Me {\n  me {\n    ...RegularUser\n  }\n}": types.MeDocument,
    "query FetchWords {\n  words {\n    id\n    word\n    definition\n    wordImageUrl\n    translation\n  }\n}": types.FetchWordsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RegularUser on User {\n  id\n  username\n  email\n}"): (typeof documents)["fragment RegularUser on User {\n  id\n  username\n  email\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ChangePassword($newPassword: String!, $token: String!) {\n  changePassword(newPassword: $newPassword, token: $token) {\n    user {\n      ...RegularUser\n    }\n    errors {\n      field\n      message\n    }\n  }\n}"): (typeof documents)["mutation ChangePassword($newPassword: String!, $token: String!) {\n  changePassword(newPassword: $newPassword, token: $token) {\n    user {\n      ...RegularUser\n    }\n    errors {\n      field\n      message\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateWord($definition: String!, $word: String!, $translation: String, $wordImageUrl: String) {\n  createWord(\n    definition: $definition\n    word: $word\n    translation: $translation\n    wordImageUrl: $wordImageUrl\n  ) {\n    id\n    word\n    definition\n    translation\n    wordImageUrl\n  }\n}"): (typeof documents)["mutation CreateWord($definition: String!, $word: String!, $translation: String, $wordImageUrl: String) {\n  createWord(\n    definition: $definition\n    word: $word\n    translation: $translation\n    wordImageUrl: $wordImageUrl\n  ) {\n    id\n    word\n    definition\n    translation\n    wordImageUrl\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ForgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}"): (typeof documents)["mutation ForgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($emailOrUsername: String!, $password: String!) {\n  login(emailOrUsername: $emailOrUsername, password: $password) {\n    user {\n      ...RegularUser\n    }\n    errors {\n      field\n      message\n    }\n  }\n}"): (typeof documents)["mutation Login($emailOrUsername: String!, $password: String!) {\n  login(emailOrUsername: $emailOrUsername, password: $password) {\n    user {\n      ...RegularUser\n    }\n    errors {\n      field\n      message\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Logout {\n  logout\n}"): (typeof documents)["mutation Logout {\n  logout\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($options: UsernameAuthInput!) {\n  register(options: $options) {\n    user {\n      ...RegularUser\n    }\n    errors {\n      field\n      message\n    }\n  }\n}"): (typeof documents)["mutation Register($options: UsernameAuthInput!) {\n  register(options: $options) {\n    user {\n      ...RegularUser\n    }\n    errors {\n      field\n      message\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    ...RegularUser\n  }\n}"): (typeof documents)["query Me {\n  me {\n    ...RegularUser\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchWords {\n  words {\n    id\n    word\n    definition\n    wordImageUrl\n    translation\n  }\n}"): (typeof documents)["query FetchWords {\n  words {\n    id\n    word\n    definition\n    wordImageUrl\n    translation\n  }\n}"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;