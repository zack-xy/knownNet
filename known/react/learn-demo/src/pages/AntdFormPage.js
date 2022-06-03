import React, { Component } from 'react'
import {Form, Input, Button} from 'antd'

const FormItem = Form.Item

const nameRules = {required: true, message: "请输入姓名"}
const passwordRules = {required: true, message: "请输入密码"}

export default class AntdFormPage extends Component {
  formRef = React.createRef()

  componentDidMount() {
    console.log("formRef", this.formRef.current)
    this.formRef.current.setFieldsValue({name: ""})
  }

  onReset = () => {
    this.formRef.current.resetFields()
  }
  onFinish = val => {
    console.log("onFinish", val);
  }
  onFinishFailed = val => {
    console.log("onFinishFailed", val);
  }

  render() {
    return (
      <div>
        <h1>AntdFormPage</h1>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          onReset={this.onReset}>
          <FormItem label="姓名" name="name" rules={[nameRules]}>
            <Input placeholder="请输入姓名"></Input>
          </FormItem>
          <FormItem label="密码" name="password" rules={[passwordRules]}>
            <Input placeholder='请输入密码' />
          </FormItem>
          <FormItem>
            <Button type="primary" size="large" htmlType='submit'>
              提交
            </Button>
          </FormItem>
          <FormItem>
            <Button type="default" size="large" htmlType='reset'>
              重置
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}


// 函数组件
// export default function AntdFormPage(props) {
//   const [form] = Form.useForm()

//   const onFinish = val => {
//     console.log("onFinish", val);
//   }

//   const onFinishFailed = val => {
//     console.log("onFinishFailed", val);
//   }
  
//   const onReset = () => {
//     form.resetFields()
//   }
  
//   useEffect(() => {
//     form.setFieldsValue({name: "zack"})
//   })

//   return (
//     <div>
//       <h1>AntdFormPage</h1>
//       <Form
//         ref={this.formRef}
//         onFinish={this.onFinish}
//         onFinishFailed={this.onFinishFailed}
//         onReset={this.onReset}>
//         <FormItem label="姓名" name="name" rules={[nameRules]}>
//           <Input placeholder="请输入姓名"></Input>
//         </FormItem>
//         <FormItem label="密码" name="password" rules={[passwordRules]}>
//           <Input placeholder='请输入密码' />
//         </FormItem>
//         <FormItem>
//           <Button type="primary" size="large" htmlType='submit'>
//             提交
//           </Button>
//         </FormItem>
//         <FormItem>
//           <Button type="default" size="large" htmlType='reset'>
//             重置
//           </Button>
//         </FormItem>
//       </Form>
//     </div>
//   )

// }
