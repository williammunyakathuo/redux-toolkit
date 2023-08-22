const store = require('./app/store')
const cakeActions = require('./app/features/cake/cakeSlice').cakeActions

console.log ('initial state', store.getState)

const unsubscribe = store.subscribe(()=>{
    console.log('updated state', store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked())

unsubscribe()