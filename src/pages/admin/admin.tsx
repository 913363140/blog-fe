import React from 'react'
import Tags from './components/tags/tags'

interface IState {
  t: string
}

class Admin extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      t: '1',
    }
  }

  public render() {
    return <Tags tagList={['tag1', 'tag2']} />
  }
}

export default Admin
