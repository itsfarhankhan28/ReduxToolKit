import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import {CustomReducer} from './Reducer'



    const Store = configureStore({
        reducer:{
            custom:CustomReducer
        }
    })

export default Store

