import Popup from 'reactjs-popup';
import '../App.css';
import SignaturePad from 'react-signature-canvas';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from '../config.js';

function Form() {
  const tech = useSelector((state) => state.user);

  const sigCanvasClient = useRef({});
  const [form, setForm] = useState({
    date: '',
    contract: '',
    motive: '',
    instalCod: '',
    clientID: '',
    clientName: '',
    installationAddress: '',
    caseNumber: '',
    comments: '',
    receivedByName: '',
    receivedByID: '',
    receivedSignature: '',
    technicianName: tech.fullName,
    technicianID: tech.id,
    technicianSignature: tech.signature,
    formID: uuidv4(),
  });

  const cleanCanvas = () => {
    setForm({ ...form, receivedSignature: sigCanvasClient.current.clear() });
  };

  const saveCanvas = () => {
    setForm({
      ...form,
      receivedSignature: sigCanvasClient.current
        .getTrimmedCanvas()
        .toDataURL('image/png'),
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    const url = '/form/create';
    try {
      const res = await axios.post(url, form);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center items-center bg-slate-600 ">
      <form
        className="className=border rounded-md shadow-xl p-5 bg-slate-200 space-y-2 my-5"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center mb-2">Formulario</h1>
        <div className="space-x-2">
          <span>Fecha</span>
          <input
            type="date"
            className="border rounded-sm"
            value={form.date}
            name="date"
            onChange={handleOnChange}
          />
        </div>

        <div className="space-x-2">
          <span>Contrato</span>
          <input
            type="text"
            className="border rounded-sm"
            value={form.contract}
            name="contract"
            onChange={handleOnChange}
          />
        </div>

        <div className="space-x-6">
          <span>Motivo</span>
          <input
            type="text"
            className="border rounded-sm"
            value={form.motive}
            name="motive"
            onChange={handleOnChange}
          />
        </div>

        <div className="space-x-3">
          <span>Cod. Instalador</span>
          <input
            type="text"
            className="border rounded-sm"
            value={form.instalCod}
            name="instalCod"
            onChange={handleOnChange}
          />
        </div>

        <div className="space-x-3">
          <span>N. de Identidad</span>
          <input
            type="number"
            className="border rounded-sm"
            value={form.clientID}
            name="clientID"
            onChange={handleOnChange}
          />
        </div>

        <div className="space-x-6">
          <span>Cliente </span>
          <input
            type="text"
            className="border rounded-sm"
            value={form.clientName}
            name="clientName"
            onChange={handleOnChange}
          />
        </div>

        <div className="space-x-3">
          <span>Dirección</span>
          <input
            type="text"
            className="border rounded-sm"
            value={form.installationAddress}
            name="installationAddress"
            onChange={handleOnChange}
          />
        </div>

        <div className="space-x-2">
          <span>Caso No</span>
          <input
            type="number"
            className="border rounded-sm"
            value={form.caseNumber}
            name="caseNumber"
            onChange={handleOnChange}
          />
        </div>

        <div className="space-x-2 flex items-center">
          <span>Observaciones</span>
          <textarea
            cols={22}
            rows={5}
            className="border rounded-sm"
            value={form.comments}
            name="comments"
            onChange={handleOnChange}
          />
        </div>

        <h1 className="text-xl  mb-2">Recibe/Cliente</h1>
        <div className="space-x-4">
          <span>Nombre </span>
          <input
            type="text"
            className="border rounded-sm"
            value={form.receivedByName}
            name="receivedByName"
            onChange={handleOnChange}
          />
        </div>
        <div className="space-x-2">
          <span>Identidad</span>
          <input
            type="number"
            className="border rounded-sm"
            value={form.receivedByID}
            name="receivedByID"
            onChange={handleOnChange}
          />
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
                name="receivedSignature"
              />
              <div className="flex justify-around">
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

        <div className="flex justify-center mt-5">
          <button className="rounded-md p-2 bg-green-500">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
