export const authActions = {
    authAC: (login: string |null, isAuth: boolean) => {
        return {type: 'SET_USER_DATA', login, isAuth} as const
    },
    signOutAC:()=>{
        return{type:'SIGN_OUT' , login:'' , isAuth:false} as const
    }
};