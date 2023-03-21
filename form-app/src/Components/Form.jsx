import Popup from 'reactjs-popup';
import '../App.css';
import SignaturePad from 'react-signature-canvas';
import { useRef } from 'react';

function Form() {
  const sigCanvasClient = useRef({});

  const cleanCanvas = () => {
    sigCanvasClient.current.clear();
  };

  const saveCanvas = () =>
    console.log(
      sigCanvasClient.current.getTrimmedCanvas().toDataURL('image/png')
    );

  return (
    <div className="h-screen flex justify-center items-center bg-slate-600">
      <form className="className=border rounded-md shadow-xl p-5 bg-slate-200 space-y-2">
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
          <span>Factibilidad Técnica</span>
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
          <span>Dirección</span>
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

        <Popup
          modal
          contentStyle={{ className: 'w-44' }}
          trigger={
            <button className="border rounded-sm w-20 " type="button">
              Firmar
            </button>
          }
          closeOnDocumentClick={false}
        >
          {(close) => (
            <>
              <SignaturePad
                canvasProps={{ className: 'w-full h-64' }}
                ref={sigCanvasClient}
              />
              <div className="flex justify-around">
                {' '}
                <button onClick={close} className="rounded-md border p-1">
                  Cerrar
                </button>
                <button onClick={cleanCanvas} className="rounded-md border p-1">
                  Limpiar
                </button>
                <button onClick={saveCanvas} className="rounded-md border p-1">
                  Guardar
                </button>
              </div>
            </>
          )}
        </Popup>

        <h1 className="text-xl  mb-2">Técnico</h1>
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
