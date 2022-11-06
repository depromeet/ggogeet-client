interface BaseResponse<T = unknown> {
  data: T
  message: string
  result: boolean
  code: number
}

export default BaseResponse
