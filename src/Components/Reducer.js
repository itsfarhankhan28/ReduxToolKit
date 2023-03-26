import React from 'react'
import { createReducer } from '@reduxjs/toolkit'



    const initialState = {
     value : 0
    }

    export const CustomReducer = createReducer(initialState,{
        increment:(state,action)=>{
            state.value += 1
        },
        incrementByValue:(state,action)=>{
            state.value += action.payload
        },
        decrement:(state,action)=>{
            state.value -= 1
        }
    })
