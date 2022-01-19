import { Progress,space,Typography } from 'antd';

const { Title } = Typography;
const Skills = () => (
  <>
  <space>
    <Title style={{ color: '#08fdd8' }}>Skills & experience</Title>
    <p style={{ color: 'white' }}>Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.</p>
    <p style={{ color: 'white' }}>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</p>
    <div style={{ width: '50%' }}>
    <span style={{ color: 'white' }} >React.js</span>
    <Progress strokeColor={'blue'} percent={80} showInfo= {false} status="active"/>
    <span style={{ color: 'white' }} >Javascript</span>
    <Progress strokeColor={'green'} percent={60} showInfo= {false} status="active" />
    <span style={{ color: 'white' }} >Node.js</span>
    <Progress strokeColor={'grey'} percent={90} showInfo= {false}  status="active" />
    <span style={{ color: 'white' }} >Css</span>
    <Progress strokeColor={'red'} percent={30} showInfo= {false}  status="active" />
    </div>
    </space>
  </>
);


export default Skills;
