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

import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ProfileMetadata<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Profiles
   * @name ProfileMetadataDetail
   * @summary Get profile metadata
   * @request GET:/profile-metadata/{id}
   * @secure
   */
  profileMetadataDetail = (id: number, query?: { app?: string }, params: RequestParams = {}) =>
    this.request<Record<string, any>, any>({
      path: `/profile-metadata/${id}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Profiles
   * @name ProfileMetadataUpdate
   * @summary Set profile metadata
   * @request PUT:/profile-metadata/{id}
   * @secure
   */
  profileMetadataUpdate = (
    id: number,
    data: Record<string, any>,
    query?: { app?: string },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/profile-metadata/${id}`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}