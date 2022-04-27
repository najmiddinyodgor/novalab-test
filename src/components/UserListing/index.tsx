import { FC } from 'react'
import { Avatar, List } from 'antd'
import { User } from '../../types/models'
import { ListProps } from 'antd/lib/list'
import { NavLink } from 'react-router-dom'

type Props = {
  users: User[]
} & ListProps<User>

export const UserListing: FC<Props> = ({ users, ...props }: Props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={users}
      renderItem={user => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={user.avatar} />}
            title={<NavLink to={`/profile/${user.id}`}>{user.first_name}</NavLink>}
            description={user.last_name}
          />
        </List.Item>
      )}
      {...props}
    />
  )
}
