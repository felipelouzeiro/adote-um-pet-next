import { useEffect, useState } from 'react'
import { Report } from '../../../@types/Report'
import { ApiService } from '../../../services/ApiServices'

export function useReport() {
  const [reportList, setReportList] = useState<Report[]>([])

  useEffect(() => {
    ApiService.get('/adocoes').then((response) => {
      setReportList(response.data)
    })
  }, [])

  return {
    reportList,
  }
}
