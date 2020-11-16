import React from 'react'
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import { useMutation } from '@apollo/react-hooks'
import { DELETE_STORAGE_DRIVE } from '../graphql/storage_drive'

function StorageItem({ refresh, id, name, capacity, seq_read, seq_write, pwr, interface_type, update }) {

    const [deleteStorageDrive ] = useMutation(DELETE_STORAGE_DRIVE)

    const handleDelete = (e) => {
      deleteStorageDrive({
        variables:{
          id
        }
      }).then((data)=>{
        console.log(data)
        refresh();
      }).catch((e)=>{
        console.error(e);
      })

    };
    const handleItemUpdate = () => {
      update(id);
    };
    return (
      <TableRow key={id}>
        <TableCell>{name}</TableCell>
        <TableCell>{capacity}</TableCell>
        <TableCell>{seq_read}</TableCell>
        <TableCell>{seq_write}</TableCell>
        <TableCell>{pwr}</TableCell>
        <TableCell>{interface_type}</TableCell>
        <TableCell>
          <Button onClick={handleItemUpdate}  size="small" color="primary">
            Edit
          </Button>
          <Button onClick={handleDelete} size="small"  color="primary">
            Remove
          </Button>
        </TableCell>
      </TableRow>
    );
  }

function StorageDrive({ refresh, update, storage_drive }) {
  const { all_storage } = storage_drive;
    return (
        <Paper>
        <Table>
          <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Storage Capacity</TableCell>
                <TableCell >Max Read MB/s</TableCell>
                <TableCell >Max Write MB/s</TableCell>
                <TableCell >Power Consumption</TableCell>
                <TableCell >Interface Type</TableCell>
                <TableCell >Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {all_storage.map((item) => {
              return (
                <StorageItem
                  refresh={refresh}
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  capacity={item.capacity}
                  seq_read={item.seq_read}
                  seq_write={item.seq_write}
                  pwr={item.power}
                  interface_type={item.interface_type}
                  update={update}
                ></StorageItem>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )
}
export default StorageDrive
