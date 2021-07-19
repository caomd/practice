//路由跳转ts约束参数
import { Dictionary } from '_vue-router@3.0.1@vue-router/types/router';
import Router, { RoutePath } from '../router';
export type BaseRouteType = Dictionary<string>;//{string:string}
export interface IndexParam extends BaseRouteType {
    name: string;
}
export interface AboutParam extends BaseRouteType {
    testName: string
}

export interface UserParam extends BaseRouteType {
    userId: string
}

export interface ParamMap {
    [RoutePath.Index]: IndexParam;
    [RoutePath.About]: AboutParam;
    [RoutePath.User]: UserParam;
}

export class RouterHelper {
    //routePath 一定是在RoutePath枚举里边的
    public static replace<T extends RoutePath>(routePath: T, params: ParamMap[T]) {
        Router.replace({
            path: routePath,
            query: params
        })
    }
    public static push<T extends RoutePath>(routePath: T, params: ParamMap[T]) {
        Router.push({
            path: routePath,
            query: params
        })
    }
}