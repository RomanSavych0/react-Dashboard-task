export const authActions = {
  authAC: (
    login: string | null,
    isAuth: boolean,
    userId: string,
    password: string,
  ) => {
    return { type: 'SET_USER_DATA', login, isAuth, userId, password } as const
  },
  signOutAC: () => {
    return {
      type: 'SIGN_OUT',
      login: null,
      password: null,
      isAuth: false,
    } as const
  },
}
