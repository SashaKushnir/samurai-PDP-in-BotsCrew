import React from 'react'

// @ts-ignore
import s from "./Header.module.css"
// @ts-ignore
import UserDefaultPhoto from '../../images/DefaultAvatar.jpg'
import LoginNavLink from '../common/Navigation/LoginNavLink'
import LogoutNavLink from '../common/Navigation/LogoutNavLink'
import { HeaderPropsFromRedux } from "./HeaderContainer";


const Header: React.FC<HeaderPropsFromRedux> = ({isFetching,data,isAuthorised,toLogOut}) => {
    return (
        <header className={s.header}>
            <img className={s.groot}
                 src="https://img4.goodfon.ru/wallpaper/nbig/9/b6/strazhi-galaktiki-grut-groot-marvel-marvel-baby-groot-guardi.jpg"/>
            <div></div>

            {isFetching ? null :
                <div>
                    {isAuthorised ? <div className={s.toRightSize}>
                            <img className={s.myHeaderPhoto} src={UserDefaultPhoto} alt="YourPhoto"/>
                            <div>
                                <div className={s.headerLogin}>{data.login}</div>
                                <LogoutNavLink toLogOut={toLogOut}/>
                            </div>
                        </div> :
                        <div className={s.toRightSize}>
                            <LoginNavLink/>
                        </div>
                    }
                </div>
            }
        </header>
    )
}

export default Header