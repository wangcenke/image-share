/*
 * @Author: wangcenke
 * @Date: 2021-05-28 10:00:44
 * @LastEditors: wangcenke
 * @LastEditTime: 2021-05-28 11:15:12
 * @Description: 接口请求汇总
 */

import { http } from "utils/request";

export const getUser = params => http.get("/api/getUser", params);
