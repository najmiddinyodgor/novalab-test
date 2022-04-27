import { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { useFormQuery } from '../../hooks/useFormQuery'
import { Modal, ModalProps } from 'antd'

type Props = PropsWithChildren<{
  formName: string
}> & ModalProps

export const QueryModal: FC<Props> = ({ formName, children, ...props }: Props) => {
  const { currentForm, closeForm } = useFormQuery()
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    setIsModalVisible(formName === currentForm)
  }, [formName, currentForm])

  const handleCancel = useCallback(() => closeForm(formName), [closeForm, formName])

  return (
    <Modal
      {...props}
      visible={isModalVisible}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  )
}
