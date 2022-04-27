import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useUser } from '../hooks/user/useUser'
import { Avatar, Col, Row, Skeleton, Descriptions, Divider } from 'antd'

export const ProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { user, isLoading } = useUser(parseInt(id!))

  if (isLoading || !user) {
    return <Skeleton avatar paragraph={{ rows: 2 }} />
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
    </>
  )
}
