import React, { useState, useEffect } from "react";
import { useOrtakCarpan } from "../context/StudentProvider";
import AddStudent from "./AddStudent";

const EditStudent = () => {
  const { showModal, closeModal, editStudent, putStudent } = useOrtakCarpan();
  const [guncelle, setGuncelle] = useState(editStudent);

  const handleChange = (e) => {
    setGuncelle({ ...guncelle, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setGuncelle(editStudent);
  }, [editStudent]);
  const handleSubmit = () => {
    e.preventDefault();

    putStudent(guncelle);
    setGuncelle("");
  };

  if (!showModal) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center ">
        <div className=" p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
            <form onSubmit={handleSubmit}>
              <h2 className="flex justify-between items-center text-xl font-bold ">
                GUNCELLE
              </h2>
              <button
                onClick={closeModal}
                type="button"
                className="absolute top-2 right-2 cursor-pointer text-red-500 hover:text-red-700"
              >
                X
              </button>
              <input
                className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 transition-colors "
                type="text "
                required
                name="name"
                value={guncelle.name}
                onChange={handleChange}
              />
              <input
                className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 transition-colors "
                type="text "
                required
                name="branch"
                value={guncelle.branch}
                onChange={handleChange}
              />
              <input
                className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 transition-colors "
                type="number "
                required
                name="grade"
                value={guncelle.grade}
                onChange={handleChange}
              />
              <div className="flex flex-row gap-4 mt-4 justify-center items-center">
                <button
                  type="button"
                  onClick={closeModal}
                  className=" cursor-pointer text-indigo-500 hover:text-indigo-700"
                >
                  Vazgec
                </button>
                <button
                  type="button"
                  onClick={() => putStudent(guncelle)}
                  className=" cursor-pointer  text-indigo-500 hover:text-indigo-700"
                >
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditStudent;
