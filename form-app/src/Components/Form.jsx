import React from 'react';

function Form() {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-600">
      <form className="className=border rounded-md shadow-xl p-5 bg-slate-200">
        <h1 className="text-2xl text-center mb-2">Formulario</h1>
        <div className="space-x-2">
          <span>Fecha</span>
          <input type="date" className="border rounded-sm" />
        </div>

        <div className="space-x-2">
          <span>Contrato</span>
          <input type="number" name="" id="" className="border rounded-sm" />
        </div>

        <div className="space-x-6">
          <span>Motivo</span>
          <input type="text" className="border rounded-sm" />
        </div>

        <div className="space-x-2 ">
          <span>Factibilidad Tecnica</span>
          <input type="checkbox" /> <span>Si</span>
          <input type="checkbox" />
          <span>No</span>
        </div>

        <div className="space-x-3">
          <span>Cod. Instalador</span>
          <input type="text" className="border rounded-sm" />
        </div>

        <div className="space-x-3">
          <span>N. de Identidad</span>
          <input type="number" name="" id="" className="border rounded-sm" />
        </div>

        <div className="space-x-6">
          <span>Cliente </span>
          <input type="text" className="border rounded-sm" />
        </div>

        <div className="space-x-3">
          <span>Direccion</span>
          <input type="text" className="border rounded-sm" />
        </div>

        <div className="flex items-center space-x-1">
          <span>Solicitudes OPEN</span>
          <div className="flex flex-col">
            <input type="text" className="border rounded-sm" />
            <input type="text" className="border rounded-sm" />
            <input type="text" className="border rounded-sm" />
          </div>
        </div>

        <div className="space-x-2">
          <span>Caso No</span>
          <input type="number" className="border rounded-sm" />
        </div>

        <div className="space-x-2 flex items-center">
          <span>Observaciones</span>
          <textarea
            name=""
            id=""
            cols={22}
            rows={5}
            className="border rounded-sm"
          />
        </div>

        <h1 className="text-xl  mb-2">Recibe/Cliente</h1>
        <div className="space-x-4">
          <span>Nombre </span>
          <input type="text" className="border rounded-sm" />
        </div>
        <div className="space-x-2">
          <span>Identidad</span>
          <input type="number" className="border rounded-sm" />
        </div>
        <button className="border rounded-sm w-20">Firmar</button>

        <h1 className="text-xl  mb-2">Tecnico</h1>
        <div className="space-x-4">
          <span>Nombre </span>
          <input type="text" className="border rounded-sm" />
        </div>

        <div className="space-x-2">
          <span>Identidad</span>
          <input type="number" className="border rounded-sm" />
        </div>
        <button className="border rounded-sm w-20">Firmar</button>
      </form>
    </div>
  );
}

export default Form;
