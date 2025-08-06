export interface IGenericMessageResponse {
  message: string
}
export interface IRegisterRequest {
  email: string
  password: string
  password_confirmation: string
}
export interface IRegisterResponse {
  message: string
  user_id: number
  token: string
}

export interface ILoginRequest {
  email: string
  password: string
}

export interface ILoginResponse {
  message: string
  token: string
}

export interface IPasswordRequestResetRequest {
  email: string
}
export interface IPasswordResetRequest {
  token: string
  password: string
  password_confirmation: string
}

export interface ISelfData {
  phone: string
  strategy_name: string
  income: number
  deposit: number
  start_of_deposit: string
  remaining_term: number
  is_reviewed: boolean
  email: string
  contract_signed: boolean
}

export interface IUpdatePhoneRequest {
  phone: string
}
