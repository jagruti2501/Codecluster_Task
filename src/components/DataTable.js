import React, { useEffect } from 'react';
import { useTable, useRowSelect } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataTable = ({ columns, data, updateData, onRowSelection, loading, onLoadMore }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
      updateData,
    },
    useRowSelect
  );

  useEffect(() => {
    onRowSelection(selectedFlatRows);
  }, [selectedFlatRows, onRowSelection]);

  return (
    <div>
      <table {...getTableProps()} className="table table-bordered table-dark" style={{ width: '80%', margin: 'auto' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td {...cell.getCellProps()}>
                    {cellIndex === 0 && rowIndex < 5 ? (
                      <input
                        type="checkbox"
                        checked={rowIndex < 5 && selectedRowIds[row.id]}
                        onChange={() => {
                          row.toggleRowSelected();
                        }}
                      />
                    ) : (
                      cell.render('Cell')
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={onLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
