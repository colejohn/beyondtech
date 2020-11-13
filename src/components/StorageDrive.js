import React from 'react'
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
const storage = [
    { _id: 1, name: "Samsung 970 Evo Plus NVMe PCIe", capacity: "1TB", seq_read: "3,500MB/s", seq_write: "3,200MB/s", pwr:"9 W", interface_type: "PCIe Gen 3.0 x 4, NVMe 1.3"},
    { _id: 2, name: "870 QVO ", capacity: "2TB", seq_read: "560 MB/s", seq_write: "530 MB/s", pwr:"50 mW", interface_type: "SATA III"}

]

function StorageItem({ id, name, capacity, seq_read, seq_write, pwr, interface_type, update }) {
    // const [deleteSeries] = useMutation(DELETE_SERIES);

    
    const handleDelete = (e) => {
    //   deleteSeries({
    //     variables: {
    //       id,
    //     },
    //   })
    //     .then((data) => {
    //       console.log(data);
    //       updateData();
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });





    };
  
    const handleItemUpdate = () => {
      update(id);
      // console.log(id);
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

function StorageDrive({update}) {
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
            {storage.map((item) => {
              return (
                <StorageItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  capacity={item.capacity}
                  seq_read={item.seq_read}
                  seq_write={item.seq_write}
                  pwr={item.pwr}
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
