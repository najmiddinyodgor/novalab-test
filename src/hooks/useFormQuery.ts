import { useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { FORM_QUERY_KEY } from '../utils/constants'

export const useFormQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentForm, setCurrentForm] = useState<string | undefined>(undefined)

  const showForm = useCallback((formName: string) => setSearchParams({
    [FORM_QUERY_KEY]: formName
  }), [setSearchParams])

  const closeForm = useCallback((formName: string) => {
    const params: Record<string, string> = {}
    searchParams.forEach((key: string, value: string) => {
      if (key !== formName) {
        params[key] = value
      }
    })
    setSearchParams(params)
  }, [searchParams, setSearchParams])

  useEffect(() => {
    setCurrentForm(searchParams.get(FORM_QUERY_KEY) as string)
  }, [searchParams])

  return {
    showForm,
    closeForm,
    currentForm
  }
}
