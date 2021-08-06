/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { ChangeEvent } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import UserDefaultPhoto from '../../../../images/DefaultAvatar.jpg'
import Contacts from '../Contacts/Contacts'
import ProfileStatusWithHooks from '../Contacts/ProfileStatusWithHooks'
import s from '../Info.module.css'
import loginFormBll from '../../../common/Forms/Mytextare.module.css'
import styles from './InfoShowsNEditMode.module.css'
import {  InfoPropsType } from "../Info";
import { MyPageNonContainerProps } from "../MyPage";
import { ProfileByUserIdType } from "../../../Redux/profile/profileInfoReducer"
import { FormDataType } from "../../../Login/Login";


type InfoShowsEditModeType =
    {
        deActavateEditMode: () => void
        savePhoto : (e: ChangeEvent<HTMLInputElement>) => void
    }
    & Omit<InfoPropsType, "savePhoto" | "addPost" | "friendsIn" | "setProfileStatus" | "updateProfileDat"
    | "updateProfileData" | "isAuth" | "defAuthorisedUserId" | "history" | "location" | "match">


const InfoShowsEditMode: React.FC<InjectedFormProps<ProfileFormType, InfoShowsEditModeType> & InfoShowsEditModeType> = (props) => {
    let contactsWithInputs = Object.keys(props.profileByUserId.contacts).map(key => {
        return <Contacts key1={key} key={key}
                         value={props.profileByUserId.contacts[key]} showInputs={true}/>
    })

    return <form className={styles.myWrapper} onSubmit={props.handleSubmit}>
        <div>
            <div className={s.photos}>
                <label htmlFor="file-input">
                    <img src={(props.profileByUserId.photos.small || props.profileByUserId.photos.large) ?
                        (props.profileByUserId.photos.small) ?
                            props.profileByUserId.photos.small : props.profileByUserId.photos.large
                        : UserDefaultPhoto} alt="Photo.small" className={s.userPhotos}/>
                </label>

                <input hidden id="file-input" onChange={props.savePhoto} type="file"/>
            </div>

            <div className={styles.marginator}>
                <b>Status: </b>
                <ProfileStatusWithHooks updateProfileStatus={props.updateProfileStatus} status={props.status}
                                        cantChangeStatus={props.cantChangeStatus}/>
            </div>
            <div>
                <div>
                    <div className={styles.marginator}>
                        {props.profileByUserId.lookingForAJobDescription &&
                        <div><b>Looking for a job description: </b>
                            <Field placeholder="Job description" name={"lookingForAJobDescription"}
                                   component={"input"}
                            />
                        </div>}
                    </div>
                    <div className={styles.marginator}><b>Looking for a job : </b>
                        <Field placeholder="Job description" name={"lookingForAJob"}
                               component={"input"} type={"checkbox"}
                        />
                    </div>
                    <div className={styles.marginator}><b>FullName: </b>
                        <Field placeholder="Job description" name={"fullName"}
                               component={"input"}/>
                    </div>
                    <div className={styles.marginator}><b>About me: </b>
                        <Field placeholder="Job description" name={"aboutMe"}
                               component={"input"}/>
                    </div>
                </div>


                <div className={styles.marginator}>
                    <button onClick={props.deActavateEditMode}>Cancel</button>
                    <button>Save changes</button>
                    <div>
                        {props.error && <div className={loginFormBll.errorM}>
                            {props.error}
                        </div>}
                    </div>
                </div>

            </div>

        </div>
        <div><b>Contacts: </b>
            <div>{contactsWithInputs}</div>
        </div>
    </form>
}

type ProfileFormType = {
    lookingForAJobDescription: string
    lookingForAJob: boolean
    fullName: string
    aboutMe: string
}

const form = reduxForm<ProfileFormType, any>({form: 'editProfile'})(InfoShowsEditMode)


export default form