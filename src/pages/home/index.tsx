import { Badge, Button} from 'antd-mobile'
import classnames from 'classnames'
import { observer } from 'mobx-react'
import * as React from 'react'
import homeStore from '../..//store/homeStore'
import './index.less'

interface IProps {
  x: string
}

interface IState {
  x: string
}

class Index extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { x: '' }
  }

  public render() {
    const prefixCls = ''
    return (
      <div className={classnames(prefixCls)}>
        {homeStore.b}
        <div>
          <Button size={'small'} inline={true} type={'ghost'} onClick={this.handleClick}>+</Button>
        </div>
        {homeStore.b > 3 && 
          <div>
          <Badge text='欢迎来到lyc‘s blog' hot={true} style={{ marginLeft: 12}} />
          </div>
        }
      </div> 
    )
  }
  private handleClick() {
    const b = homeStore.b + 1
    homeStore.setB(b)
  }
}

export default observer(Index)