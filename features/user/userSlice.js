const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState ={
    loading : false,
    users: [],
    error: ''
}
// generates pending, fullfiled and rejected
const fetchUsers = createAsyncThunk('user/fetchUsers', ()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.data.map((user) => user.id))
})

const userslice = createSlice ({
    name : 'user',
    initialState,
    extraReducers: (builder )=> {
        builder.addCase(fetchUsers.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.loading = false
            state.loading = []
            state.loading = action.error.message
        })
    }
})

module.exports = userslice.reducer
module.exports.fetchUsers = fetchUsers