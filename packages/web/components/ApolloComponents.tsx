export type Maybe<T> = T | null;

export interface UserChangePasswordInput {
  password: string;

  token: string;
}

export interface UserForgotPasswordInput {
  email: string;
}

export interface UserLoginInput {
  password: string;

  email: string;
}

export interface UserRegisterInput {
  password: string;

  firstName: string;

  email: string;
}

export interface JobCreateInput {
  title: string;

  description: string;

  location: string;
}

// ====================================================
// Documents
// ====================================================

export type JobCreateVariables = {
  input: JobCreateInput;
};

export type JobCreateMutation = {
  __typename?: "Mutation";

  jobCreate: JobCreateJobCreate;
};

export type JobCreateJobCreate = {
  __typename?: "Job";

  id: string;

  title: string;

  description: string;

  location: string;
};

export type JobFetchAllVariables = {};

export type JobFetchAllQuery = {
  __typename?: "Query";

  jobFetchAll: JobFetchAllJobFetchAll[];
};

export type JobFetchAllJobFetchAll = {
  __typename?: "Job";

  id: string;

  title: string;

  description: string;

  location: string;

  owner: JobFetchAllOwner;
};

export type JobFetchAllOwner = {
  __typename?: "User";

  id: string;

  firstName: string;

  email: string;
};

export type UserLoginVariables = {
  input: UserLoginInput;
};

export type UserLoginMutation = {
  __typename?: "Mutation";

  login: Maybe<UserLoginLogin>;
};

export type UserLoginLogin = {
  __typename?: "User";

  id: string;

  firstName: string;

  email: string;
};

export type UserLogoutVariables = {};

export type UserLogoutMutation = {
  __typename?: "Mutation";

  logout: boolean;
};

export type UserRegisterVariables = {
  input: UserRegisterInput;
};

export type UserRegisterMutation = {
  __typename?: "Mutation";

  register: UserRegisterRegister;
};

export type UserRegisterRegister = {
  __typename?: "User";

  id: string;

  firstName: string;

  email: string;
};

export type UserMeVariables = {};

export type UserMeQuery = {
  __typename?: "Query";

  me: Maybe<UserMeMe>;
};

export type UserMeMe = {
  __typename?: "User";

  id: string;

  firstName: string;

  email: string;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const JobCreateDocument = gql`
  mutation JobCreate($input: JobCreateInput!) {
    jobCreate(input: $input) {
      id
      title
      description
      location
    }
  }
`;
export class JobCreateComponent extends React.Component<
  Partial<ReactApollo.MutationProps<JobCreateMutation, JobCreateVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<JobCreateMutation, JobCreateVariables>
        mutation={JobCreateDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type JobCreateProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<JobCreateMutation, JobCreateVariables>
> &
  TChildProps;
export type JobCreateMutationFn = ReactApollo.MutationFn<
  JobCreateMutation,
  JobCreateVariables
>;
export function JobCreateHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        JobCreateMutation,
        JobCreateVariables,
        JobCreateProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    JobCreateMutation,
    JobCreateVariables,
    JobCreateProps<TChildProps>
  >(JobCreateDocument, operationOptions);
}
export const JobFetchAllDocument = gql`
  query JobFetchAll {
    jobFetchAll {
      id
      title
      description
      location
      owner {
        id
        firstName
        email
      }
    }
  }
`;
export class JobFetchAllComponent extends React.Component<
  Partial<ReactApollo.QueryProps<JobFetchAllQuery, JobFetchAllVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<JobFetchAllQuery, JobFetchAllVariables>
        query={JobFetchAllDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type JobFetchAllProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<JobFetchAllQuery, JobFetchAllVariables>
> &
  TChildProps;
export function JobFetchAllHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        JobFetchAllQuery,
        JobFetchAllVariables,
        JobFetchAllProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    JobFetchAllQuery,
    JobFetchAllVariables,
    JobFetchAllProps<TChildProps>
  >(JobFetchAllDocument, operationOptions);
}
export const UserLoginDocument = gql`
  mutation UserLogin($input: UserLoginInput!) {
    login(input: $input) {
      id
      firstName
      email
    }
  }
`;
export class UserLoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<UserLoginMutation, UserLoginVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<UserLoginMutation, UserLoginVariables>
        mutation={UserLoginDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type UserLoginProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<UserLoginMutation, UserLoginVariables>
> &
  TChildProps;
export type UserLoginMutationFn = ReactApollo.MutationFn<
  UserLoginMutation,
  UserLoginVariables
>;
export function UserLoginHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UserLoginMutation,
        UserLoginVariables,
        UserLoginProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    UserLoginMutation,
    UserLoginVariables,
    UserLoginProps<TChildProps>
  >(UserLoginDocument, operationOptions);
}
export const UserLogoutDocument = gql`
  mutation UserLogout {
    logout
  }
`;
export class UserLogoutComponent extends React.Component<
  Partial<ReactApollo.MutationProps<UserLogoutMutation, UserLogoutVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<UserLogoutMutation, UserLogoutVariables>
        mutation={UserLogoutDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type UserLogoutProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<UserLogoutMutation, UserLogoutVariables>
> &
  TChildProps;
export type UserLogoutMutationFn = ReactApollo.MutationFn<
  UserLogoutMutation,
  UserLogoutVariables
>;
export function UserLogoutHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UserLogoutMutation,
        UserLogoutVariables,
        UserLogoutProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    UserLogoutMutation,
    UserLogoutVariables,
    UserLogoutProps<TChildProps>
  >(UserLogoutDocument, operationOptions);
}
export const UserRegisterDocument = gql`
  mutation UserRegister($input: UserRegisterInput!) {
    register(input: $input) {
      id
      firstName
      email
    }
  }
`;
export class UserRegisterComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<UserRegisterMutation, UserRegisterVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<UserRegisterMutation, UserRegisterVariables>
        mutation={UserRegisterDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type UserRegisterProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<UserRegisterMutation, UserRegisterVariables>
> &
  TChildProps;
export type UserRegisterMutationFn = ReactApollo.MutationFn<
  UserRegisterMutation,
  UserRegisterVariables
>;
export function UserRegisterHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UserRegisterMutation,
        UserRegisterVariables,
        UserRegisterProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    UserRegisterMutation,
    UserRegisterVariables,
    UserRegisterProps<TChildProps>
  >(UserRegisterDocument, operationOptions);
}
export const UserMeDocument = gql`
  query UserMe {
    me {
      id
      firstName
      email
    }
  }
`;
export class UserMeComponent extends React.Component<
  Partial<ReactApollo.QueryProps<UserMeQuery, UserMeVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<UserMeQuery, UserMeVariables>
        query={UserMeDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type UserMeProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<UserMeQuery, UserMeVariables>
> &
  TChildProps;
export function UserMeHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UserMeQuery,
        UserMeVariables,
        UserMeProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    UserMeQuery,
    UserMeVariables,
    UserMeProps<TChildProps>
  >(UserMeDocument, operationOptions);
}
