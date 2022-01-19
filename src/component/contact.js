import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Form,Space, Input, InputNumber, Button} from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const onFinish = (values) => {
  console.log(values);
};
const AnyReactComponent = ({ text }) => <img src="https://www.blexar.com/avatar.png" alt={text} width="20" height="20" />;

class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 35.03,
      lng: 9.49
    },
    zoom: 15
  };
  render() {
    return (
      <>
      <h2>Contact me</h2><br />
      {/* <h3>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form</h3><br />*/}
      
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}> 
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'Subject']} label="Subject">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'Message']} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button block> Send Message</Button>
      </Form.Item>
    </Form>
    <div class="column" style={{ height: '80%', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDJYRzFiJxZjmfK27vwwQkx_KKFzkfrkTQ" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={35.03482186429926}
          lng={9.494955110249458}
          text="Bilel"
        />
      </GoogleMapReact>
    </div>
    </>
    );
  }
}

export default Contact;