import { Anchor } from 'antd'
import { last } from 'lodash'
import React from 'react'

const { Link } = Anchor

export interface ITocItem {
  anchor: string,
  children?: ITocItem[],
  level: number,
  text: string,
}

export type TocItems = ITocItem[]

export default class Tocify {
  private tocItems: TocItems = []
  private index: number = 0

  constructor() {
    this.tocItems = []
    this.index = 0
  }

  public add(text: string, level: number) {
    const anchor = `toc${level}${++this.index}`
    const item = { anchor, level, text }
    const items = this.tocItems

    if (items.length === 0) {
      items.push(item)
    } else {
      let lastItem = last(items) as ITocItem
      
      if (item.level > lastItem.level) {
        for (let i = lastItem.level + 1; i <= 6; i++) {
          const { children } = lastItem
          if (!children) {
            lastItem.children = [item]
            break
          }

          lastItem = last(children) as ITocItem

          if (item.level <= lastItem.level) {
            children.push(item)
            break
          }
        }
      } else {
        items.push(item)
      }
    }
    return anchor
  }

  public reset = () => {
    this.tocItems = []
    this.index = 0
  }

  public renderToc(items: ITocItem[]) {
    return items.map(item => (
      <Link key={item.anchor} href={`#${item.anchor}`} title={item.text} target=''>
        {item.children && this.renderToc(item.children)}  
      </Link>
    ))
  }

  public render() {
    console.log('toc render')
    return (
      <Anchor style={{ padding: 24 }} affix={true} showInkInFixed={true}>
        {this.renderToc(this.tocItems)}
      </Anchor>
    )
  }
}