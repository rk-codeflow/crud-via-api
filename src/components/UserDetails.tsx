import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const UserDetails = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default UserDetails;
