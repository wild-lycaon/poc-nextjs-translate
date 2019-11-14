/**
 * Window Utility Module
 */

/**
 * Windowオブジェクトが存在するか？
 */
export const hasWindow = (): boolean => {
  return typeof window !== 'undefined'
}
