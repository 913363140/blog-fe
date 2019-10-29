import React from 'react'
import './index.less'
import { Card, Tag as Tags } from 'antd'

interface IProps { 
  tagList: []
}

export default class Tag extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    console.log('tagList- ', this.props.tagList)
    if (!this.props.tagList.length) {
      return null
    }
    const tagElement = this.props.tagList.map((item: string, index: number) => {
      return (
        <Tags
          key={index + item}
          color='#2db7f5'
          style={{
            marginBottom: 8,
            maxWidth: 150,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >{item}</Tags>
      )
    })
    return (
      <Card
        bordered={false}
        className="tag"
        title="标签"
      >
        {tagElement}
      </Card>
    )
  }
}