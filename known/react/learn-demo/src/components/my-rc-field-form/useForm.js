import React, {useRef} from 'react'

class FormStore {
  constructor() {
    this.store = {} // 存储数据
  }

  setFieldsValue = () => {}

  getForm() {
    return {
      setFieldsValue: this.setFieldsValue
    }
  }
}

// 自定义hook
export default function useForm(props) {
  const formRef = useRef()
  if(!formRef.current) {
    // new一个
    const formStore = new FormStore()
    formRef.current = formStore
  }
  return [formRef.current]
}
