/*
 * @Description: 
 * @Author: liuxiaodan
 * @FilePath: \packages\utils\type.ts
 * @Date: 2025-01-19 20:06:44
 */
import { isNumber, isObject, isString,isSymbol, isNaN,isNull,isRegExp,isUndefined } from "lodash-es";

export { isNumber, isObject, isString,isSymbol, isNaN,isNull,isRegExp,isUndefined } from "lodash-es";
export const isStringNumber = (val: string): boolean => {
    if (!isString(val)) {
      return false
    }
    return !Number.isNaN(Number(val))
  }