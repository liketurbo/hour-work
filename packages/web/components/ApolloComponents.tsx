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

// ====================================================
// Documents
// ====================================================

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

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

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
