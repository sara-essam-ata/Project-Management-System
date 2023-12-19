export interface ILogin {
    email: string,
    password: string
}

export interface IRegister {
  userName: string,
  email: string,
  country: string,
  phoneNumber: string,
  profileImage: string,
  password: string,
  confirmPassword: string,
}

export interface IChangePassword {
    oldPassword: string,
    newPassword: string,
    confirmNewPassword: string,
}


