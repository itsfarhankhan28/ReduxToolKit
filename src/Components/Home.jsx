import React from 'react'
import './Home.css'
import { useDispatch , useSelector } from 'react-redux'

const Home = () => {

    const dispatch = useDispatch()

    const {value} = useSelector(state => state.custom)

    const AddBtn = ()=>{
        dispatch({
            type:'increment'
        })
    }
    const DelBtn = ()=>{
        dispatch({
            type:'decrement'
        })
    }

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h1 className='Value'>{value}</h1>
        <div className='Buttons'>
            <button className='Button1' onClick={AddBtn}>Increment</button>
            <button className='Button2' onClick={DelBtn}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default Home
