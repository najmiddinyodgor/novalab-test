import { FC } from 'react'
import { Avatar, Col, Row, Descriptions, Divider, Button } from 'antd'
import { useAppDispatch, useAppSelector } from '../hooks/store'
import { logout, selectUser } from '../store/slices/auth'

export const CabinetPage: FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <Row>
        <Col span={2}>
          <Avatar src={user.avatar} />
        </Col>
        <Col span={22}>
          <h1>{user.first_name}</h1>
          <Divider />
          <Descriptions title="User Info">
            <Descriptions.Item label="Last Name">{user.last_name}</Descriptions.Item>
            <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type={'primary'} onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>
    </>
  )
}
