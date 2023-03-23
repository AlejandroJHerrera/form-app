import { useEffect } from 'react';
import { useSearchAdminTechsMutation } from '../Reducers/Api/apiSlice';

function TechList({ user }) {
  const [techWithSameAdmin, { data, isLoading }] =
    useSearchAdminTechsMutation();

  useEffect(() => {
    const getData = async () => {
      techWithSameAdmin({
        admin: user.fullName,
      });
    };
    getData();
  }, [techWithSameAdmin, user]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="h-40 overflow-y-hidden ">
      {data ? (
        <>
          {data.group.map((tech) => (
            <div className="grid grid-cols-4 gap-5 " key={tech._id}>
              <p className="truncate">{tech.fullName}</p>
              <p className="truncate">{tech.dni}</p>
              <p className="truncate">{tech.phone}</p>
              <p className="truncate">{tech.admin}</p>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="flex justify-center items-center h-40 overflow-y-hidden">
            <h1>No hay información disponible</h1>
          </div>
        </>
      )}
    </div>
  );
}

export default TechList;
