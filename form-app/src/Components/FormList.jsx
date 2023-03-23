import { useEffect } from 'react';
import { useSearchUserFormsMutation } from '../Reducers/Api/apiSlice';

function FormList({ user }) {
  const [forms, { data, isLoading }] = useSearchUserFormsMutation();
  const technicianID = user.id;

  useEffect(() => {
    const getData = async () => {
      forms({
        technicianID,
      });
    };
    getData();
  }, [forms, technicianID]);

  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div>
      {!data ? (
        <>
          <div className="flex justify-center items-center h-40 overflow-y-hidden">
            <h1>No hay información disponible</h1>
          </div>
        </>
      ) : (
        <>
          {data.tech.map((tech) => (
            <div
              className="grid grid-cols-5 gap-3 h-40 overflow-y-hidden"
              key={tech.formID}
            >
              <p className="truncate">{tech.formID}</p>
              <p className="truncate">{tech.technicianName}</p>
              <p className="truncate">{tech.date}</p>
              <p className="truncate">{tech.clientName}</p>
              <span>Icono</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FormList;
