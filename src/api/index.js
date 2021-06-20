/*
 * @Author: wangcenke
 * @Date: 2021-05-28 10:00:44
 * @LastEditors: wangcenke
 * @LastEditTime: 2021-06-20 21:20:33
 * @Description: 接口请求汇总
 */

import { http } from "utils/request";

export const getUser = params => http.get("/api/getUser", params);

export const getImage = params => http.get("/api/getImage", params);