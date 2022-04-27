import { createRef, FC } from 'react'
import { Button, Col, Form, Input, message, Row } from 'antd'
import { LoginDTO } from '../../services/AuthService'
import { useLogin } from '../../hooks/auth/useLogin'
import { QueryModal } from '../QueryModal/QueryModal'
import { useFormQuery } from '../../hooks/useFormQuery'
import { SIGNUP_FORM_KEY } from '../SignUpForm'
import { FormInstance } from 'antd/es/form'

export const LOGIN_FORM_KEY = 'login-form'

export const LoginForm: FC = () => {
  const formRef = createRef<FormInstance>()
  const { isLoading, error, login } = useLogin()
  const { showForm, closeForm } = useFormQuery()

  const onFinish = async (data: LoginDTO) => {
    await login(data)
    if (!error) {
      closeForm(LOGIN_FORM_KEY)
      formRef.current!.resetFields()
    } else {
      message.error(error)
    }
  }

  const handleSignUpClick = () => showForm(SIGNUP_FORM_KEY)

  return (
    <QueryModal title="Login" footer={null} formName={LOGIN_FORM_KEY}>
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
        >
          <Input.Password />
        </Form.Item>

        <Row justify={'space-between'}>
          <Col>
            Need an account? Please <b onClick={handleSignUpClick}>register</b>
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
