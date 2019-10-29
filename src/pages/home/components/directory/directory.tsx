import { Menu } from "antd";
import * as React from "react";
import './directory.less'

const { SubMenu } = Menu;

interface IProps {
  directoryList: [];
  handleClick: (props: { key: string }) => Promise<void>
}

export default class Directory extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const directoryElement = this.props.directoryList.map((item: any) => {
      return (
        <SubMenu key={"sub" + item.id} title={item.name}>
          {item.childList.map((article: any) => {
            return (
              <Menu.Item key={article.id}>
                <span className="nav-text">{article.title}</span>
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    });

    return (
      <Menu className="directory" key="menu" mode="inline" onClick={this.props.handleClick}>
        {directoryElement}
      </Menu>
    );
  }
}
