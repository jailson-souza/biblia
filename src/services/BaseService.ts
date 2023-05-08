import axios, { AxiosInstance } from 'axios'

function instance() {
   const api = axios.create({ baseURL: 'https://www.abibliadigital.com.br/api' })
   api.interceptors.request.use((config: any) => {
      const headers = {
         ...config.headers,
         authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlN1biBNYXkgMDcgMjAyMyAxOTo1NjowMCBHTVQrMDAwMC42M2RjMDI4NWI0MGY4YzAwMjQzYmVkZGUiLCJpYXQiOjE2ODM0ODkzNjB9.FhvhNxHstmhWSG3XET1bLQfYdleVfe4xMFHPT_vdy90'
      }
      return { ...config, headers }
   })
   return api
}

export abstract class BaseService {
   protected api: AxiosInstance
   constructor() {
      this.api = instance()
   }
}
