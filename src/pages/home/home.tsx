import { Layout } from 'antd'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import API from '../../api/api'
import Directory from './components/directory/directory'
import Tag from './components/tag/index'
import Tocfiy from './components/tocify/index'
import './home.less'

const { Footer, Content, Sider } = Layout

interface IProps {
  x: string
}

interface IState {
  directoryList: any
  content: string
  tocList: any
  tagList: []
}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      content: '',
      directoryList: [],
      tagList: [],
      tocList: [],
    }
  }

  public componentWillMount() {
    this.init()
  }

  public render() {
    console.log('home rendner')
    return (
      <Layout>
        <Sider
          theme="light"
          style={{
            height: '100vh',
            left: 0,
            overflow: 'auto',
            position: 'fixed',
          }}
        >
          <div className="logo" />
          <Directory directoryList={this.state.directoryList} handleClick={this.getArticle} />
        </Sider>
        <Layout style={{ marginLeft: 0 }}>
          <Content className="main-area">
            <ReactMarkdown source={this.state.content} renderers={{ heading: this.heading }} />
          </Content>
          <Footer style={{ textAlign: 'center' }}> @2018 Created by lyc </Footer>
        </Layout>
        <Sider
          theme="light"
          style={{
            background: '#f0f2f5',
            position: 'fixed',
            right: 30,
            top: 30,
          }}
        >
          <Tag tagList={this.state.tagList} />
          <Tocfiy tocList={this.state.tocList} />
        </Sider>
      </Layout>
    )
  }

  private init = async () => {
    this.getArticle({ key: '1' })
    const result: any = await API.getDirectory()
    this.setState({ directoryList: result.data })
  }
  private heading = (props: any) => {
    const level: number = props.level
    const text: string = props.children[0].props.value
    const Heading = ReactMarkdown.renderers.heading
    this.state.tocList.push({ level, text })
    return (
      <div id={text}>
        <Heading {...props} />
      </div>
    )
  }

  private getArticle = async (props: { key: string }) => {
    const { key } = props
    const result: any = await API.getArticle({ id: key })
    this.setState({
      content: result.data.content,
      tagList: result.data.tag,
      tocList: [],
    })
  }
}

export default observer(Home)
