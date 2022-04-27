import { createRef, FC, useCallback, useState } from 'react'
import { Button, Col, Form, Input, message, Row, Space, Upload } from 'antd'
import { useSignUp } from '../../hooks/auth/useSignUp'
import { useFormQuery } from '../../hooks/useFormQuery'
import { SignUpDTO } from '../../services/AuthService'
import { QueryModal } from '../QueryModal/QueryModal'
import { LOGIN_FORM_KEY } from '../LoginForm'
import { FormInstance } from 'antd/es/form';

export const SIGNUP_FORM_KEY = 'signup-form'

export const SignUpForm: FC = () => {
  const formRef = createRef<FormInstance>()
  const { isLoading, error, signUp } = useSignUp()
  const { showForm, closeForm } = useFormQuery()

  const onFinish = async (data: Omit<SignUpDTO, 'avatar'>) => {
    await signUp({
      ...data,
      avatar: 'https://imageio.forbes.com/specials-images/imageserve/5f47d4de7637290765bce495/0x0.jpg?format=jpg&crop=2146,2145,x1699,y559,safe&height=416&width=416&fit=bounds'
    })
    if (!error) {
      closeForm(SIGNUP_FORM_KEY)
      formRef.current!.resetFields()
    } else {
      message.error(error)
    }
  }


  const handleLoginClick = () => showForm(LOGIN_FORM_KEY)

  return (
    <QueryModal title="Login" footer={null} formName={SIGNUP_FORM_KEY}>
      <Form
        ref={formRef}
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          initialValue={'eve.holt@reqres.in'}
          rules={[
            { type: 'email', message: 'The input is not valid E-mail!' },
            { required: true, message: 'Please input your email!' }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          initialValue={'cityslicka'}
          rules={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="password_confirmation"
          initialValue={'cityslicka'}
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password' },
            ({ getFieldValue }) => ({
              validator (_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Row justify={'space-between'}>
          <Col>
            Already have an account? Please <b onClick={handleLoginClick}>log in</b>
          </Col>
          <Col>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </QueryModal>
  )
}
