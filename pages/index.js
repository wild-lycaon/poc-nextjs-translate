/**
 * Index Page
 */
import * as React from 'react'
import Head from 'next/head'
import { setLanguage, translate } from '../src/utils/LanguageUtil'

export default () => (
  <div>
    <Head>
      <title>Translate</title>
    </Head>
    <form>
      <button value='ja' onClick={changeLanguage}>日本語</button>
      <button value='en' onClick={changeLanguage}>英語</button>
      <button value='zh' onClick={changeLanguage}>中国語（簡体）</button>
    </form>
    <p>{translate('ここの')}</p>
    <p>{translate('文字列が')}</p>
    <p>{translate('翻訳されます')}</p>
    <p>{translate('ただし、辞書に無いものはそのまま表示されます')}</p>
  </div>
)

/**
 * 言語ボタンイベントハンドラ
 * @param event
 */
const changeLanguage = event => {
  event.preventDefault()
  const language = event.currentTarget.value
  setLanguage(language)
}
