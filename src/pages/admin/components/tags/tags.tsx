import React from 'react'
import { Tag, Icon } from 'antd'

interface IProps {
  tagList: string[]
}
interface IState {
  inputVisible: boolean
}

class Tags extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      inputVisible: false,
    }
  }

  public render() {
    const { inputVisible } = this.state
    return (
      !inputVisible && (
        <Tag style={{ background: '#fff', borderStyle: 'dashed' }}>
          <Icon type="plus" /> New Tag
        </Tag>
      )
    )
  }
}

export default Tags
