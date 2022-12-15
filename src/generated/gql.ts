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
    "mutation CreateWord($definition: String!, $word: String!, $translation: String, $wordImageUrl: String) {\n  createWord(\n    definition: $definition\n    word: $word\n    translation: $translation\n    wordImageUrl: $wordImageUrl\n  ) {\n    id\n    word\n    definition\n    translation\n    wordImageUrl\n  }\n}": types.CreateWordDocument,
    "mutation Login($options: UsernameAuthInput!) {\n  login(options: $options) {\n    user {\n      id\n      username\n      createdAt\n      updatedAt\n    }\n    errors {\n      field\n      message\n    }\n  }\n}": types.LoginDocument,
    "query FetchWords {\n  words {\n    id\n    word\n    definition\n    wordImageUrl\n    translation\n  }\n}": types.FetchWordsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateWord($definition: String!, $word: String!, $translation: String, $wordImageUrl: String) {\n  createWord(\n    definition: $definition\n    word: $word\n    translation: $translation\n    wordImageUrl: $wordImageUrl\n  ) {\n    id\n    word\n    definition\n    translation\n    wordImageUrl\n  }\n}"): (typeof documents)["mutation CreateWord($definition: String!, $word: String!, $translation: String, $wordImageUrl: String) {\n  createWord(\n    definition: $definition\n    word: $word\n    translation: $translation\n    wordImageUrl: $wordImageUrl\n  ) {\n    id\n    word\n    definition\n    translation\n    wordImageUrl\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($options: UsernameAuthInput!) {\n  login(options: $options) {\n    user {\n      id\n      username\n      createdAt\n      updatedAt\n    }\n    errors {\n      field\n      message\n    }\n  }\n}"): (typeof documents)["mutation Login($options: UsernameAuthInput!) {\n  login(options: $options) {\n    user {\n      id\n      username\n      createdAt\n      updatedAt\n    }\n    errors {\n      field\n      message\n    }\n  }\n}"];
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