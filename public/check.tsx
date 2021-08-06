import { PhotosType } from '../src/components/Redux/profile/profileInfoReducer';
import React from "react";
const initialState = {
    name : "Sasha",
    age : 19,
    photos : null as PhotosType | null
}
type initialType = typeof initialState

 const reducer = (state : initialType = initialState, action :  GetActionsTypes<ActionsTypes> ) => {
    switch (action.type) {
        case 'Save_Name' : 
        return {
            ...state, photos : action.name
        }
        case 'Save_Age' : 
            return {...state, age : action.age}
        case 'Save_Name' : 
            return {...state, name : action.name}
        default:
            break;
    }
}
const actions = {
 AC1 : (age : number) => ({type : 'Save_Age', age} as const),
 AC2 : (name : string) => ({type : 'Save_Name', name} as const)
}
type ActionsTypes = typeof actions



type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
type GetActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

let hiphop :  GetActionsTypes<ActionsTypes> = {type : 'Save_Age', age : 5}
console.log(hiphop)

//type actionsType = ReturnType<typeof AC1> | ReturnType<typeof AC2>


type UserType = {name : string, age : number}
type ServerResponseType<T> = {errorcode : number, message : Array<string>, data : T}

const serverResponse1 : ServerResponseType<UserType> = {
    errorcode : 1,
    message : ["ir", "dasda"],
    data : {
        name : "Sasha",
        age : 19
    }
}

const serverResponse2: ServerResponseType<PhotosType> = {
    errorcode : 1,
    message : ["ir", "dasda"],
    data :{
            large : "dadasd",
            small : "dasdadd"
    }
}

interface first {
    name: string
    surname: string
}
type Mytype = keyof first

let Sanya1407: Mytype = "name"

class A extends React.Component  {
    render() {
        return <Comp name={"dsad"} surname={"da"}/>
    }
}

class Comp extends React.Component<first> {

}



























