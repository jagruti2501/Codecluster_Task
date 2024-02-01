import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from './components/DataTable';
import BarChart from './components/BarChart';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [checkedRowsData, setCheckedRowsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8000/data?_page=${page}&_limit=${pageSize}`)
      .then((response) => {
        console.log('API Response:', response.data);
        setTableData((prevData) => [...prevData, ...response.data]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [page, pageSize]);

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Work Sector', accessor: 'sector' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'Income(In LPA)', accessor: 'income' },
  ];

  const handleRowSelection = (selectedRows) => {
    const selectedRowsData = selectedRows.map((row) => tableData[row.index]);
    setCheckedRowsData(selectedRowsData);
  };

  return (
    <div className="App">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Table</h1>
          <DataTable
            columns={columns}
            data={tableData}
            onRowSelection={handleRowSelection}
            loading={loading}
            onLoadMore={() => setPage((prevPage) => prevPage + 1)}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 text-center">
          <BarChart checkedRowsData={checkedRowsData} style={{ width: '80%', height: '400px' }} />
        </div>
      </div>
    </div>
  );
};

export default App;
