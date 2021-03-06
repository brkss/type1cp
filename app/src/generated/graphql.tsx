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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AddBaseInput = {
  bg_before: Scalars['Float'];
  carbs: Scalars['Float'];
};

export type Base = {
  __typename?: 'Base';
  id: Scalars['Float'];
  bg_before: Scalars['Float'];
  carbs: Scalars['Float'];
  bg_after?: Maybe<Scalars['Float']>;
  insulin_taken?: Maybe<Scalars['Float']>;
  hypoglycemia: Scalars['Boolean'];
  correction: Scalars['Float'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type DataDefaultResponse = {
  __typename?: 'DataDefaultResponse';
  status: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  base?: Maybe<Base>;
};


export type Mutation = {
  __typename?: 'Mutation';
  createBaseData: DataDefaultResponse;
  updateBaseData: DataDefaultResponse;
};


export type MutationCreateBaseDataArgs = {
  data: AddBaseInput;
};


export type MutationUpdateBaseDataArgs = {
  data: UpdateBaseDataInput;
};

export type Query = {
  __typename?: 'Query';
  data: Scalars['String'];
  history: Array<Base>;
};

export type UpdateBaseDataInput = {
  id: Scalars['Float'];
  bg_before: Scalars['Float'];
  carbs: Scalars['Float'];
  bg_after?: Maybe<Scalars['Float']>;
  insulin_taken?: Maybe<Scalars['Float']>;
  correction?: Maybe<Scalars['Float']>;
  hypoglycemia?: Maybe<Scalars['Boolean']>;
};

export type CreateBaseDataMutationVariables = Exact<{
  bg_before: Scalars['Float'];
  carbs: Scalars['Float'];
}>;


export type CreateBaseDataMutation = (
  { __typename?: 'Mutation' }
  & { createBaseData: (
    { __typename?: 'DataDefaultResponse' }
    & Pick<DataDefaultResponse, 'status' | 'message'>
    & { base?: Maybe<(
      { __typename?: 'Base' }
      & Pick<Base, 'id' | 'bg_before' | 'carbs' | 'bg_after' | 'hypoglycemia' | 'correction' | 'insulin_taken' | 'created_at'>
    )> }
  ) }
);

export type HistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type HistoryQuery = (
  { __typename?: 'Query' }
  & { history: Array<(
    { __typename?: 'Base' }
    & Pick<Base, 'id' | 'bg_before' | 'carbs' | 'bg_after' | 'hypoglycemia' | 'correction' | 'insulin_taken' | 'created_at'>
  )> }
);

export type UpdateBaseDataMutationVariables = Exact<{
  id: Scalars['Float'];
  bg_before: Scalars['Float'];
  carbs: Scalars['Float'];
  bg_after?: Maybe<Scalars['Float']>;
  insulin_taken?: Maybe<Scalars['Float']>;
  correction?: Maybe<Scalars['Float']>;
  hypoglycemia?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateBaseDataMutation = (
  { __typename?: 'Mutation' }
  & { updateBaseData: (
    { __typename?: 'DataDefaultResponse' }
    & Pick<DataDefaultResponse, 'status' | 'message'>
    & { base?: Maybe<(
      { __typename?: 'Base' }
      & Pick<Base, 'id' | 'bg_before' | 'carbs' | 'bg_after' | 'hypoglycemia' | 'correction' | 'insulin_taken' | 'created_at'>
    )> }
  ) }
);

export type DataQueryVariables = Exact<{ [key: string]: never; }>;


export type DataQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'data'>
);


export const CreateBaseDataDocument = gql`
    mutation CreateBaseData($bg_before: Float!, $carbs: Float!) {
  createBaseData(data: {bg_before: $bg_before, carbs: $carbs}) {
    status
    message
    base {
      id
      bg_before
      carbs
      bg_after
      hypoglycemia
      correction
      insulin_taken
      created_at
    }
  }
}
    `;
export type CreateBaseDataMutationFn = Apollo.MutationFunction<CreateBaseDataMutation, CreateBaseDataMutationVariables>;

/**
 * __useCreateBaseDataMutation__
 *
 * To run a mutation, you first call `useCreateBaseDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBaseDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBaseDataMutation, { data, loading, error }] = useCreateBaseDataMutation({
 *   variables: {
 *      bg_before: // value for 'bg_before'
 *      carbs: // value for 'carbs'
 *   },
 * });
 */
export function useCreateBaseDataMutation(baseOptions?: Apollo.MutationHookOptions<CreateBaseDataMutation, CreateBaseDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBaseDataMutation, CreateBaseDataMutationVariables>(CreateBaseDataDocument, options);
      }
export type CreateBaseDataMutationHookResult = ReturnType<typeof useCreateBaseDataMutation>;
export type CreateBaseDataMutationResult = Apollo.MutationResult<CreateBaseDataMutation>;
export type CreateBaseDataMutationOptions = Apollo.BaseMutationOptions<CreateBaseDataMutation, CreateBaseDataMutationVariables>;
export const HistoryDocument = gql`
    query History {
  history {
    id
    bg_before
    carbs
    bg_after
    hypoglycemia
    correction
    insulin_taken
    created_at
  }
}
    `;

/**
 * __useHistoryQuery__
 *
 * To run a query within a React component, call `useHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHistoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useHistoryQuery(baseOptions?: Apollo.QueryHookOptions<HistoryQuery, HistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HistoryQuery, HistoryQueryVariables>(HistoryDocument, options);
      }
export function useHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HistoryQuery, HistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HistoryQuery, HistoryQueryVariables>(HistoryDocument, options);
        }
export type HistoryQueryHookResult = ReturnType<typeof useHistoryQuery>;
export type HistoryLazyQueryHookResult = ReturnType<typeof useHistoryLazyQuery>;
export type HistoryQueryResult = Apollo.QueryResult<HistoryQuery, HistoryQueryVariables>;
export const UpdateBaseDataDocument = gql`
    mutation UpdateBaseData($id: Float!, $bg_before: Float!, $carbs: Float!, $bg_after: Float, $insulin_taken: Float, $correction: Float, $hypoglycemia: Boolean) {
  updateBaseData(
    data: {id: $id, bg_before: $bg_before, carbs: $carbs, bg_after: $bg_after, insulin_taken: $insulin_taken, correction: $correction, hypoglycemia: $hypoglycemia}
  ) {
    status
    message
    base {
      id
      bg_before
      carbs
      bg_after
      hypoglycemia
      correction
      insulin_taken
      created_at
    }
  }
}
    `;
export type UpdateBaseDataMutationFn = Apollo.MutationFunction<UpdateBaseDataMutation, UpdateBaseDataMutationVariables>;

/**
 * __useUpdateBaseDataMutation__
 *
 * To run a mutation, you first call `useUpdateBaseDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBaseDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBaseDataMutation, { data, loading, error }] = useUpdateBaseDataMutation({
 *   variables: {
 *      id: // value for 'id'
 *      bg_before: // value for 'bg_before'
 *      carbs: // value for 'carbs'
 *      bg_after: // value for 'bg_after'
 *      insulin_taken: // value for 'insulin_taken'
 *      correction: // value for 'correction'
 *      hypoglycemia: // value for 'hypoglycemia'
 *   },
 * });
 */
export function useUpdateBaseDataMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBaseDataMutation, UpdateBaseDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBaseDataMutation, UpdateBaseDataMutationVariables>(UpdateBaseDataDocument, options);
      }
export type UpdateBaseDataMutationHookResult = ReturnType<typeof useUpdateBaseDataMutation>;
export type UpdateBaseDataMutationResult = Apollo.MutationResult<UpdateBaseDataMutation>;
export type UpdateBaseDataMutationOptions = Apollo.BaseMutationOptions<UpdateBaseDataMutation, UpdateBaseDataMutationVariables>;
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