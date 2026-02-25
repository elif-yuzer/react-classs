import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {change,hastaSil, hastayatiklayinca} from '../redux/appAction'

const PatientList = () => {
  const { hastalar } = useSelector((state) => state.appReducer);
  console.log(hastalar);
  const dispatch = useDispatch();

  return (
    <div >
      {hastalar.map((hasta) => (
        <div key={hasta.id} onClick={()=>dispatch(hastayatiklayinca(hasta.id))}>
          <div className={hasta.isDone ? "trueStil" : "falseStyle"}  onDoubleClick={()=>dispatch(change(hasta.id))}>
            <div>
              <h2>{hasta.patientName}</h2>
              <h4>{hasta.day}</h4>
              <h3>{hasta.myDoctor}</h3>
            </div>

           <div onClick={(e) => { e.stopPropagation(); dispatch(hastaSil(hasta.id)); }}>
              <FaTimesCircle
                style={{ color: "red" }}
               
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientList;