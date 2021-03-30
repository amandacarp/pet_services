import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Public/Home';
import 'react-calendar/dist/Calendar.css';
import EventsDash from './components/Public/EventsDash';
import AddEvent from './components/Private/AddEvent';
import Register from './components/Public/Register';
import Login from './components/Public/Login';
import PrivateRoute from './components/Private/PrivateRoute';
import Profile from './components/Private/Profile';
import Navbar from './components/Public/Navbar';
import AddPet from './components/Private/AddPet';
import SinglePet from './components/Private/SinglePet';
import EditPet from './components/Private/EditPet';
import SingleEvent from './components/Private/SingleEvent';
import EditEvent from './components/Private/EditEvent';
import './css/style.css';


const App = (props: AppProps) => {


    return (
        <Router>
            <>
			<Navbar />
                <Switch>
					<Route exact path='/'>
						<Home />
					</Route>

					<Route exact path='/events'>
						<EventsDash />
					</Route>

					<PrivateRoute exact path='/add/event'>
						<AddEvent />
					</PrivateRoute>

					<Route exact path='/register'>
						<Register />
					</Route>

					<Route exact path='/login'>
						<Login />
					</Route>

					<PrivateRoute exact path='/profile'>
						<Profile />
					</PrivateRoute>

					<PrivateRoute exact path='/add/pet'>
						<AddPet />
					</PrivateRoute>

					<PrivateRoute exact path='/pet/:id'>
						<SinglePet />
					</PrivateRoute>

					<PrivateRoute exact path='/pet/:id/edit'>
						<EditPet />
					</PrivateRoute>

					<PrivateRoute exact path='/event/:id/'>
						<SingleEvent />
					</PrivateRoute>

					<PrivateRoute exact path='/event/:id/edit'>
						<EditEvent />
					</PrivateRoute>
					
                </Switch>
            </>

        </Router>
    )
}

console.log('%cLike what you see?....', 'color: black; background: white; border: 2px solid pink; font-size: large; font-weight: bold')
console.log('%cI am looking to get hired! Contact me at carpentieri.a@gmail.com', 'color: black; background: white; border: 2px solid pink; font-size: large; font-weight: bold')

interface AppProps { }

export default App;