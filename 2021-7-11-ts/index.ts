//枚举 enum
enum ActivityStatus {
    /**未开始 */
    NOT_START = 'notstart',
    /**开始 */
    STARTED = 'started'
};
const status = ActivityStatus.NOT_START;

//2.type interface
type UserInfoA = {
    name: String;
    height: number;
};

interface UserInfoB {
    name: String;
    height?: number;//可选项
};
const userInfo: UserInfo = {};

//3.联合类型｜
interface UserInfoC {
    name: String;
    height: number;//可选项
}
interface UserInfoD {
    width: String;
    height: number;//可选项
}
function test1(param: UserInfoC | UserInfoD) { }

//4.交叉类型&
function test2(param: UserInfoC & UserInfoD) { }

//typeof
typeof 'a'//'string'
function toArray(x: number): Array<number> {
    return [x]
}
type Func = typeof toArray;//(x:number)=>number[]

//6.keyof
interface Person {
    name: string;
    age: number;
}
type KPerson = keyof Person;//'name'|'age'