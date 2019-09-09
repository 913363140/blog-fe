import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import * as React from 'react'
import './home.less'

const { Footer, Content, Sider } = Layout
const { SubMenu } = Menu

interface IProps {
  x: string
}

interface IState {
  x: string
}

const directoryList = [
  {
    childList: [
      {id: 1, title: 'this is title1',createdTime: '2019-09-06'},
      {id: 2, title: 'this is title2',createdTime: '2019-09-06'},
      {id: 3, title: 'this is title3',createdTime: '2019-09-06'},
    ],
    directoryName: 'FE',
  },
  {
    childList: [
      {id: 4, title: 'this is title1',createdTime: '2019-09-06'},
      {id: 5, title: 'this is title2',createdTime: '2019-09-06'},
      {id: 6, title: 'this is title3',createdTime: '2019-09-06'},
    ],
    directoryName: 'Algorithm',
  },
  {
    childList: [
      {id: 7, title: 'this is title1',createdTime: '2019-09-06'},
      {id: 8, title: 'this is title2',createdTime: '2019-09-06'},
      {id: 9, title: 'this is title3',createdTime: '2019-09-06'},
    ],
    directoryName: '奇淫技巧',
  },
  {
    childList: [
      {id: 10, title: 'this is title1',createdTime: '2019-09-06'},
      {id: 11, title: 'this is title2',createdTime: '2019-09-06'},
      {id: 12, title: 'this is title3',createdTime: '2019-09-06'},
    ],
    directoryName: '读书笔记',
  }
]

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { x: '' }
  }

  public render() {
    const directoryElement = directoryList.map((item, index) => {
      return (
        <SubMenu
          key={'sub' + index}
          title={
            <span>
              <span>{item.directoryName}</span>
            </span>
          }
        >
          {
            item.childList.map(article => {
              return (
                <Menu.Item key={article.id}>
                  <span className="nav-text">{article.title}</span>
                </Menu.Item>
              )
            })
          }
        </SubMenu>          
      )
    })

    return (
      <Layout>
        <Sider
          theme="light"
          style={{
            height: '100vh',
            left: 0,
            overflow: 'auto',
            position: 'fixed'
          }}
        >
          <div className="logo" />
          <Menu key="menu" mode="inline" onClick={this.getArticle}>
            {directoryElement}
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ margin: '24xp 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: 'fff', textAlign: 'center' }}>
            ...
            <br />
            Really
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            long
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}> @2018 Created by lyc </Footer>
        </Layout>  
      </Layout>
    )
  }

  private getArticle(props: { key: string; }) {
    const { key } = props
    // tslint:disable-next-line: no-console
    console.log('请求文章id - '+ key)
  }
}

export default observer(Home)