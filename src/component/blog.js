import { Card,Space} from 'antd';

const Blog = () => (
  <>
  <Space direction="horizontal">
    <Card title="Algorithms and Data Structures" extra={<a href="#">More</a>} style={{ background: '', width: 300 }}>
      <p>COMPUTER SCIENCE</p>
    </Card>
    <Card title="React JS Questions & Answers" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>WEB DEVELOPMENT</p>
    </Card>
    <Card title="Database Queries to One Table" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>SQL & DATABASES</p>
    </Card>
    </Space>
  </>
);
export default Blog;