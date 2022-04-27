import { FC, useCallback } from 'react'
import { useUsersPaginate } from '../hooks/user/useUsersPaginate'
import { Button, Col, Row, Select } from 'antd'
import { UserListing } from '../components/UserListing'

export const HomePage: FC = () => {
  const { users, perPage, setPerPage, loadPage, perPageOptions, isLoading, prevPage, nextPage } = useUsersPaginate()

  const handleChange = useCallback((value: number) => setPerPage(value), [setPerPage])
  const loadPrevPage = () => loadPage(prevPage!)
  const loadNextPage = () => loadPage(nextPage!)

  return (
    <>
      <h1>Users</h1>
      <div>
        <h4>Per page</h4>
        <Select defaultValue={perPage} style={{ width: 120 }} onChange={handleChange}>
          {
            perPageOptions.map(option => (
              <Select.Option key={option} value={option}>
                {option}
              </Select.Option>
            ))
          }
        </Select>
      </div>
      <UserListing loading={isLoading} users={users} />
      <Row>
        <Col>
          <Button disabled={!prevPage} onClick={loadPrevPage}>Prev</Button>
        </Col>
        <Col>
          <Button disabled={!nextPage} onClick={loadNextPage}>Next</Button>
        </Col>
      </Row>
    </>
  )
}
