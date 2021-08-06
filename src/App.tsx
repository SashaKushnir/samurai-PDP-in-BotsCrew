import React, { Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/NavBar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { initialization } from './components/Redux/app/appReducer'
import {connect, ConnectedProps} from 'react-redux';
// @ts-ignore
import loader from './images/VAyR.gif'
import { getIsInitializedSel } from './components/Redux/selectors/selectors';
import {RootState} from "./components/Redux/reduxStore";
const Profile = React.lazy(() => import('./components/Profile/Profile'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component<AppType> {

  componentDidMount = () => {
    this.props.initialization()
  }

  render() {
    if (!this.props.isInitialized) {

      return (
        <div>
          <img src={loader} alt = "Loader"/>
        </div>
      )
    }
    return (
      <BrowserRouter>
        <div className="app_wrapper">
          <div className="myheader">
            <HeaderContainer />
          </div>

          <Navbar />


          <div className="app_wrapper_content">

            <Switch>
              <Redirect exact from="/" to="/profile" /> 
                <Route path='/dialogs' render={() =>
                  <Suspense fallback={<div>Loading...</div>}><DialogsContainer />
                  </Suspense>} />
                <Route path='/profile/:userId?' render={() =>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Profile />
                  </Suspense>
                } />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/users' render={() =>
                  <Suspense fallback={<div>Loading...</div>}>
                    <UsersContainer />
                  </Suspense>} />
                <Route path='/settings' component={Settings} />
                <Route path='/login' render={() => <Login />} />
                <Route path='*' render={() => <div>Error 404</div>} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

let mstp = (state: RootState) => {
  return {
    isInitialized: getIsInitializedSel(state)
  }
}

const connector = connect(mstp, { initialization })
type AppType = ConnectedProps<typeof connector>
export default connector (App)


