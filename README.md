# Redux-practice
Going over Redux once more
-----------------------------------------

Store -> Provider -> Containers -> Components -> Users ->: Actions -> Reducers -> Store

Store: All your applications state/data
Prodiver: Makes store available to all  containers
Containers: fetch apps state data and use it to render (display) components
Actions: Any change made to the applications state
Reducers: Take in actions and update part of the state

-----

PROJECT SETUP:
    0.) If on a new machine, run "npm install -g create-react-app"
    1.) "create-react-app app-name"
    2.) "cd app-name" then "npm i redux --save" then "npm i react-redux —save" (These get react and redux to work together)
    3.) cd into src and run "mkdir actions components reducers" (This will create folders for essentials)

------------------------------------

Store: 

- Create store in src/index.js by:

    import { createStore } from 'redux'
    const store = createStore()

------------------------------------

Provider: 

- Create provider by: import { Provider } from 'react-redux'
- Then wrap the app in provider and pass store as a prop

    <Provider store={store}> <App /> </Provider>

------------------------------------

Reducers:

- Create reducers for specific cases, and export them 
- Create a new file in reducers and combine all reducers into their own JSON object and export that (like we did in reducers/index.js)
- Import allReducers into "src/index" from the file that we combined them (reducers/index.js) and pass it as an argument to the store: 

    createStore(allReducers)

------------------------------------

Containers:

- Create a new file called Containers and begin creating components in it
- If a component needs to use state, do the following in that components file:
    import {connect} from 'react-redux'
- Then create a function called mapStateToProps under the component class
- Within mapStateToProps() pass in state as an argument
- Then return a JSON object with the key as a foobar name (you can call it what you'd like) and the value will be state.*nameOfStateInStore*

    function mapStateToProps(state) {
    return {
        users: state.users
        }
    }

- Finally, to connect the state to your component when we export, run this code at the bottom of the file

    export default connect(mapStateToProps)(*ComponentName*)

------------------------------------

