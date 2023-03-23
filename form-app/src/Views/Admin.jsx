import AdminNavBar from '../Components/AdminNavBar';
import FormList from '../Components/FormList';
import { useSelector } from 'react-redux';
import TechList from '../Components/TechList';

function Admin() {
  const user = useSelector((state) => state.user);

  return (
    <div className="h-screen bg-slate-600 ">
      <AdminNavBar />
      <div className="text-slate-200 max-w-sm md:max-w-3xl mx-auto border-2 border-slate-300 rounded-md p-5 space-y-2 shadow-2xl">
        {/*Formularios*/}
        <div className="">
          <h1 className="text-semibold text-xl">Formularios</h1>
          <div className="grid w-full grid-cols-1 mt-5 gap-3">
            <div className="grid grid-cols-5 gap-3 border-b md:border-r border-slate-300">
              <span>Numero</span>
              <span>Técnico</span>
              <span>Fecha de creación</span>
              <span>Cliente</span>
              <span>Descargar</span>
            </div>

            <FormList user={user} />
          </div>
        </div>

        {/*Técnicos*/}
        <div className="">
          <h1 className="text-semibold text-xl">Técnicos</h1>
          <div className="grid w-full grid-cols-1 mt-5 gap-3">
            <div className="grid grid-cols-4 gap-5 border-b md:border-r border-slate-300">
              <span>Nombre</span>
              <span>ID </span>
              <span>Teléfono</span>
              <span>Admin</span>
            </div>
            <TechList user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
