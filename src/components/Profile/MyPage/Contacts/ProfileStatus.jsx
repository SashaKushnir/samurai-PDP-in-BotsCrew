
import React from 'react'
import { Field } from 'redux-form'


class ProfileStatus extends React.Component {

    state = {
        editMode : false,
        status : this.props.status
    }
    activateeditmode =  () => {
        this.setState({
            editMode : true,
        })
    }
    deactivateeditmode =  () => {
        this.setState({
            editMode : false
        })
        this.props.updateProfileStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status : e.currentTarget.value
        })
        
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <span onClick = {this.activateeditmode}>
                    {this.props.status || <div>Empty</div>}
                </span> }
                {this.state.editMode &&
                   <input autoFocus = {true} onChange = {this.onStatusChange}
                   onBlur = {this.deactivateeditmode}
                    type="text" name ={'profilestatus'} component = {'input'}/>
                }
                </div>
        )
    }
}

export default ProfileStatus


const ProfileStatusForm = (props) => {
    return (
        <form action="" onSubmit = {props.handleSubmit}>
        <Field autoFocus = {true} 
         onBlur = {this.deactivateeditmode}
          type="text" name ={'profilestatus'} component = {'input'}/>
          </form>
    )
}