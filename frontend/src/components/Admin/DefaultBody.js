import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/actions/productAction';
import { Link, Outlet } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './DefaultBody.css'


function DefaultBody() {
    var navigate=useNavigate();
function deleteRecord(id,navigate){
console.log(`/api/products/${id}`);
    axios.delete(`/api/products/${id}`).then((res)=>{
        console.log(res);
        window.location.reload();
        
    }).catch((err)=>{
        console.log(err);
    })
}

    var dispatch = useDispatch();

    var { loading, products } = useSelector((state) => {
        return state.products;
    });

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch]);


    const columns = [
        { field: "elemid", headerName: "elemID", minWidth: 500 },
        { field: "name", headerName: "Name", minWidth: 240, sortable: true },
        { field: "stock", headerName: "Stock", minWidth: 150 },
        {
            field: "action", headerName: "Action", minWidth: 150,
            renderCell: (params) => {
                return <>
                    <Link to={`/admin/${params.getValue(params.id, "elemid")}`}>
                        <EditIcon />
                    </Link>
                    <button onClick={()=>{deleteRecord(params.getValue(params.id,"elemid"),navigate)}}>
                        <DeleteIcon />
                    </button>
                </>
            }
        },
    ]

    var rows = [];
    (!loading && products.forEach((element, i) => {
        rows.push({
            id: i,
            elemid: element._id,
            name: element.name,
            stock: element.stock
        });
    }));

//     return <div>
//         {!loading && <div style={{ height: 600, width: '100%', textAlign: 'center', padding: '2%' }}>
//             <DataGrid
//                 sx={{ textAlign: 'center' }}
//                 rows={rows}
//                 columns={columns}
//                 pageSize={10}
//                 rowsPerPageOptions={[10]}
//             />
//         </div>
// }
//     </div>

return <div style={{minHeight:'35vmax'}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Product Id</b></TableCell>
            <TableCell align="right"><b>Name</b></TableCell>
            <TableCell align="right"><b>Stock</b></TableCell>
            <TableCell align="right"><b>Action</b></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading && products.map((row) => {
            
           return <TableRow
           className='tableRowAdmin'
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right"><Link to={`/admin/${row._id}`}>
                        <EditIcon />
                    </Link>
                    <button onClick={()=>{deleteRecord(row._id,navigate)}}>
                        <DeleteIcon />
                    </button></TableCell>
              
            </TableRow>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
  
            
      
    
}

export default DefaultBody