function AdminNavBar() {
  return (
    <div className="max-w-lg p-5 mx-auto mb-5">
      <ul className="flex justify-around text-slate-200 cursor-pointer">
        <li>Técnicos</li>
        <li>Formularios</li>
        <li>Ajustes</li>
      </ul>
      <div className="w-full border-b border-slate-200 mx-auto mt-2"></div>
    </div>
  );
}

export default AdminNavBar;
