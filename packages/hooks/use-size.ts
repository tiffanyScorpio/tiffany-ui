/*
 * @Description: 
 * @Author: liuxiaodan
 * @FilePath: \packages\hooks\use-size.ts
 * @Date: 2025-01-19 18:42:06
 */
import {type ComponentSize,componentSizes } from '@cyriex-ui/constants'

export const useSizeProp ={
    type: String,
    values: componentSizes,
    required: false,
  } as const

  export const useSizeProps = {
    size: useSizeProp,
  }