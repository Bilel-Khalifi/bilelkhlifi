import { Button } from 'antd';
import './about.css';


function About() {
  return (
  <div>
   <h1 style={{ color: '#08fdd8' , fontWeight:'bold' }}>Hi,</h1>
   <h1 style={{ color: '#08fdd8', fontWeight:'bold' }}>I'm Bilel,</h1>
   <h1 style={{ color: '#08fdd8', fontWeight:'bold' }}>Web developer </h1>
      <Button ghost block htmlType="submit">
        Contact me !
      </Button>
  </div>
);
}

export default About;
