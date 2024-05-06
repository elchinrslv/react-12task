import React, { useRef, useState } from 'react'
import '../RandomNumber/random.css'
const RandomNumber = () => {
    const [state,setState] = useState(0)
    const modalRef  = useRef()
    const handleOpen =()=>{
        modalRef.current.style.display= "block"

    }
    const handleCancel =()=>{
        modalRef.current.style.display= "none"
    }
    const RandomN =()=>{ 
            let rn = Math.random()*1212
            setState(rn)
    }
    const RandomTimeSet =()=>{
  
      const interval =  setInterval(()=>{
            let rn = Math.random()*1212
            setState(rn)
        },100)

         setTimeout(()=>{
            clearInterval(interval)
         },1000);

    }
    

  return (
    <>
    <div>RandomNumber</div>
    <p>{state}</p>
    <button onClick={RandomN}>random</button>
    <button className="btn btn-primary" onClick={handleOpen} >
    Получить число
  </button>
  <div ref={modalRef} className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Заказ {state} доставлен</h5>
          </div>
          <div className="modal-body">
            <p>
              Заберите его в пункте выдачи до 15 апреля включительно, потом
              заказ придется отменить.
              <br />
              Вход в пункт выдачи только в маске и перчатках.
            </p>
          </div>
          <div className="modal-footer">
            <button onClick={handleCancel} className="btn btn-secondary">
              Закрыть
            </button>
          </div>
        </div>
      </div>
      <button onMouseDown={RandomTimeSet} >random time</button>

  </>
  )
}

export default RandomNumber