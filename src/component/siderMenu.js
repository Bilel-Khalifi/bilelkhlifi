import { Button,Space } from 'antd';
import { GithubOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';
import React from 'react';
import "./siderMenu.css";


class SiderMenu extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <>
      <div className='menuItems'>
        <Button  block className='menuButton'>About</Button>
        <Button block className='menuButton'>Skills</Button>
        <Button block className='menuButton'>Blog</Button>
        <Button block className='menuButton'>Contact</Button>
      {/* <Footer style={{ background:'#181818', textAlign: 'center' }}> */}
      </div>
      <div className="socialIcons">
          <Space>
                <GithubOutlined style={{  fontSize: '16px', color: 'white' }}  />
                <TwitterOutlined style={{ fontSize: '16px', color: 'white' }}/>
                <LinkedinOutlined style={{ fontSize: '16px', color: 'white' }}/>
          </Space>
      </div>
      </>
    );
  }
}
export default SiderMenu;
// ReactDOM.render(<Sider />, mountNode);



























// import React from "react";

// const myHeader = () => {
//   return (
//     <nav class="header">
//       <ul class="header-items">
//         <li className="header-item">Item 1</li>
//         <li className="header-item">Item 2</li>
//         <li className="header-item">Item 3</li>
//         <li className="header-item">Item 4</li>
//       </ul>
//     </nav>
//   );
// };

// export default myHeader;
