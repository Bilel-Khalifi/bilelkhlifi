import React from "react";
import ReactDOM from "react-dom";
import Scroller from "./component/scroller";
import { Layout } from 'antd';
// import SiderMenu from "./component/siderMenu";
import "./index.css";
import SiderMenu from "./component/siderMenu";


function App() {
  const {Sider, Content } = Layout;
  return (
    <div>
      <Layout>
      <Sider style={{background:'#181818' }}>
        <SiderMenu />
      </Sider>
      <Layout>
        <Content style={{background:'#1d1d1d' }}><Scroller /></Content>
      </Layout>
    </Layout>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
