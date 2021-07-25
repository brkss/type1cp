import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  data: Scalars['String'];
};

export type DataQueryVariables = Exact<{ [key: string]: never; }>;


export type DataQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'data'>
);


export const DataDocument = gql`
    query Data {
  data
}
    `;

/**
 * __useDataQuery__
 *
 * To run a query within a React component, call `useDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useDataQuery(baseOptions?: Apollo.QueryHookOptions<DataQuery, DataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DataQuery, DataQueryVariables>(DataDocument, options);
      }
export function useDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DataQuery, DataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DataQuery, DataQueryVariables>(DataDocument, options);
        }
export type DataQueryHookResult = ReturnType<typeof useDataQuery>;
export type DataLazyQueryHookResult = ReturnType<typeof useDataLazyQuery>;
export type DataQueryResult = Apollo.QueryResult<DataQuery, DataQueryVariables>;