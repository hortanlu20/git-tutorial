const Table = ({ tableColumn, rowData, rowTemplate }) => {
  return (
    <table className="w-full h-[90px] overflow-y-scroll">
      <thead className="mb-3 text-gray-400">
        <tr className="">
          {tableColumn?.map((item, i) => (
            <th key={i} className={`${item.className} text-start`}>
              {item.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="mt-2 overflow-y-scroll ">
        {rowData?.map((item, i) => rowTemplate(item, i))}
      </tbody>
    </table>
  );
};

export default Table;
