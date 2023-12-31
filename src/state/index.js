import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode : "light",
    user : null,
    token : null,
    posts : [],
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setMode : (state)=>{
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin : (state,action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout : (state)=>{
            state.user = null;
            state.token = null;
        },
        setFriends : (state,action)=>{
            if(state.user){
                state.user.friends = action.payload.friends;
            }else{
                console.error("User Friends Not Exists");
            }
        },
        setPosts : (state,action)=>{
            state.posts = action.payload.posts;
        },
        setPost : (state,action)=>{
            const updatedPost = state.post.map((post)=>{
                if(post.id === action.payload.post_id) return action.payload.post;
                return post;
            })
            state.post = updatedPost;
        }
    }
})

export const { setMode,setLogin,setFriends,setLogout,setPost,setPosts } = authSlice.actions;
export default authSlice.reducer;