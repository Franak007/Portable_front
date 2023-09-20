export interface UserInterface {
  id: number,
  email: string,
  password: string
}

export interface UserInterfaceCredential {
  username: string,
  password: string
}

export interface IToken {
  token: string
}
