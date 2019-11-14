/**
 * Language Utility Module
 */
import * as _ from 'lodash'
import Router from 'next/router'
import { hasWindow } from './WindowUtil'
import { parse } from 'querystring'

/**
 * 翻訳用のデータを取り込む
 */
const _translates = require('../../data/Translates.json')

/**
 * 表示言語名を取得する
 */
export const getLanguage = (): string => {
  if (!hasWindow()) return 'ja'
  const { search } = window.location
  const query = parse(search.replace('?', ''))
  return _.get(query, 'lang', 'ja') as string
}

/**
 * 表示言語名を設定する
 * @param language
 */
export const setLanguage = (language: string): void => {
  const { pathname, search } = window.location
  const query = parse(search.replace('?', ''))
  query['lang'] = language
  Router.replace({ pathname, query }).then()
}

/**
 * 翻訳
 * @param word
 */
export const translate = (word: string): string => {
  const lang = getLanguage()
  return _.get(_translates, `${word}.${lang}`, word)
}
