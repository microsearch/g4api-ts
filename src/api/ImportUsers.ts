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

import { ImportUsersRequest, ImportUsersResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ImportUsers<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ImportExport
   * @name ImportUsersCreate
   * @summary Import users
   * @request POST:/import-users
   * @secure
   */
  importUsersCreate = (data: ImportUsersRequest, params: RequestParams = {}) =>
    this.request<ImportUsersResponse, any>({
      path: `/import-users`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}