import * as React from 'react'

interface IProps {
  x: string
}

interface IState {
  x: string
}

class Directory extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { x: '' }
  }

  public render() {
    return (
      <div>
      {'Directory'}  
    </div>
    )
  }
}

export default Directory