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

import { CreateTenantRequest, CreateTenantResponse, GetTenantResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Tenant<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Tenants
   * @name TenantDetail
   * @summary Get tenant by id
   * @request GET:/tenant/{id}
   * @secure
   */
  tenantDetail = (id: number, params: RequestParams = {}) =>
    this.request<GetTenantResponse, any>({
      path: `/tenant/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tenants
   * @name TenantDelete
   * @summary Archive a tenant
   * @request DELETE:/tenant/{id}
   * @secure
   */
  tenantDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/tenant/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Tenants
   * @name TenantCreate
   * @summary Create a new tenant
   * @request POST:/tenant
   * @secure
   */
  tenantCreate = (data: CreateTenantRequest, params: RequestParams = {}) =>
    this.request<CreateTenantResponse, any>({
      path: `/tenant`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
