import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


let mstpForRedirect = (state) => ({isAuthorised : state.authInfo.isAuthorised})

export const withRedirect = (Component) => {
    
    class Outer extends React.Component{
        render () {
            if(!this.props.isAuthorised){
                return <Redirect to = '/login' />
            }
            else
            return <Component {...this.props} />
        }
    }
    

    let withOuter = connect (mstpForRedirect)(Outer)
    
    
    return withOuter 
}



let str = "dasdas dasdasd ds ds"
let arraystr = str.split(" ")
console.log(arraystr.length)
function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(' ').length;
 } 
console.log(countWords(str))






  countWords("asdaddas  dsada da dasdsaddas")