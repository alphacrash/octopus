import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

import {
  transactionData,
  transactionHeaders,
} from "../service/TransactionData";

function ReTable() {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {transactionHeaders.map((row, index) => {
                  return (
                    <TableCell
                      key={row.id}
                      align={row.numeric ? "right" : "left"}
                      padding={row.disablePadding ? "none" : "normal"}
                    >
                      <TableSortLabel>{row.label}</TableSortLabel>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {transactionData.map((row, index) => {
                return (
                  <TableRow>
                    <TableCell
                      component="th"
                      id={index}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default ReTable;
