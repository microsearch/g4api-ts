/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  CreateUserRequest,
  CreateUserResponse,
  GetUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Users
   * @name UserDetail
   * @summary Get user by user id
   * @request GET:/user/{id}
   * @secure
   */
  userDetail = (id: number, params: RequestParams = {}) =>
    this.request<GetUserResponse, any>({
      path: `/user/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UserUpdate
   * @summary Update existing user
   * @request PUT:/user/{id}
   * @secure
   */
  userUpdate = (id: number, data: UpdateUserRequest, params: RequestParams = {}) =>
    this.request<UpdateUserResponse, any>({
      path: `/user/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UserDelete
   * @summary Archive a user
   * @request DELETE:/user/{id}
   * @secure
   */
  userDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/user/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UserCreate
   * @summary Create new user
   * @request POST:/user
   * @secure
   */
  userCreate = (data: CreateUserRequest, params: RequestParams = {}) =>
    this.request<CreateUserResponse, any>({
      path: `/user`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
