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

import { GetUserDetailsResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class UserDetails<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Internal
   * @name UserDetailsDetail
   * @summary Get user details by user id
   * @request GET:/user-details/{id}
   * @secure
   */
  userDetailsDetail = (id: number, params: RequestParams = {}) =>
    this.request<GetUserDetailsResponse, any>({
      path: `/user-details/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}