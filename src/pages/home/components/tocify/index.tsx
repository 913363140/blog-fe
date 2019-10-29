import { Card } from 'antd'
import React from 'react'
import './index.less'


interface ITocfiy {
  level: number,
  text: string
}

interface IProps {
  tocList: []
}

export default class Tocify extends React.PureComponent<IProps> {
  constructor(props: IProps) { 
    super(props)
  }

  public render() {
    console.log('this.props.tocList', this.props.tocList)
    if (!this.props.tocList.length) {
      return null
    }
    const tocElement = this.props.tocList.map((item: ITocfiy) => {
      return (
        <div
          className={'tocify-item ' + 't'+item.level}
          key={item.text}
          onClick={this.scrollIntoView}
          anchor-id={item.text}
        >
          {item.text}
        </div>
      )
    })
    return (
      <Card
        bordered={false}
        className="tocify"
        title="目录"
      >
        {tocElement}
      </Card>
    )
  }

  private scrollIntoView = (e: any) => {
    const anchorId = e.target.getAttribute('anchor-id')
    if (anchorId) {
      const anchorElement = document.getElementById(anchorId)
      if (anchorElement) { 
        anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    }
  }
}
