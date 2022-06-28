import { Table as TableBS } from "react-bootstrap";

const Table = ({ header, body, className }) => {

  console.log({header, body})

  const getTableCells = (obj) => {
    return header.map(h => {
      return <td key={h.objKey}>{h.type === "img" ? <img src={obj[h.objKey]} alt={obj.id} width={60}/> : obj[h.objKey]}</td>
    })
  }

  return (
    <TableBS striped bordered hover className={className}>
      <thead style={{whiteSpace: "nowrap"}}>
        <tr>
          {header.map((h) => <th key={h.objKey} id={h.objKey}>{h.label}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          body.map(obj => {
            return <tr key={obj.id}>{getTableCells(obj)}</tr>
          })
        }
      </tbody>
    </TableBS>
  );
};

export default Table;
