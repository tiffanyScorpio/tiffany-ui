/*
 * @Description: 
 * @Author: liuxiaodan
 * @FilePath: \packages\utils\browser.ts
 * @Date: 2025-01-19 20:12:30
 */
import { isClient, isIOS } from '@vueuse/core'

export const isFirefox = (): boolean =>
  isClient && /firefox/i.test(window.navigator.userAgent)

export { isClient, isIOS }
