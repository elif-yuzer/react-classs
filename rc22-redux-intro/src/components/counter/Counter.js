import React from 'react'
import './Counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { sayacArttir,sayacAzalt ,sifirla} from '../../redux/actions/counterActions'

const Counter = () => {
  //*degıskenler -useSelector hook ile cekılıyor
  //*fonksıyonları yakalamak ıcın usedıspatch hooku kullanıyoruz
  const dispatch=useDispatch()
  const {sayac,text}=useSelector((state)=>state.counterReducer)
  return (
    <div className="app">
      <h2 className="counter-header">Counter withh Redux</h2>
      <h1>{sayac}</h1>
      {/* bu kısma sayac gelecek */}

      <h2>{text}</h2>
      {/* buraya da text gelecek artttı azaldı */}



 
    <div>
    {/* arttır fonksıyonu */}
       <button onClick={()=>dispatch(sayacArttir())} className='counter-button positive'>
        ARTTIR
       </button>
       <button onClick={()=>dispatch(sayacAzalt())} className='counter-button negative'>
        AZALT
       </button>
       <button className="counter-button " onClick={()=>dispatch(sifirla())}>RESET</button>
    </div>
    </div>
  )
}

export default Counter