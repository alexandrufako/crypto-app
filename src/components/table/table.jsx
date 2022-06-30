import { Table as TableBS } from 'react-bootstrap';
import Image from '../image/image';
import { objDeepParse } from '../../services/utils';

const Table = ({ header, body, className, handleRowClick }) => {

  const buildCell = (currentHeaderObj, obj) => {
    switch (currentHeaderObj.type) {
      case 'img':
        return <Image src={obj[currentHeaderObj.objKey]} alt={obj.id} width={60} />;
      case 'string':
        return obj[currentHeaderObj.objKey];
      case 'object':
        return objDeepParse(currentHeaderObj.objKey, obj);
      default:
        return obj[currentHeaderObj.objKey];
    }
  };

  

  const getTableCells = (obj) => {
    return header.map((h) => {
      return <td key={h.objKey}>{buildCell(h, obj)}</td>;
    });
  };

  return (
    <TableBS striped bordered hover className={className}>
      <thead style={{ whiteSpace: 'nowrap' }}>
        <tr>
          {header.map((h) => (
            <th key={h.objKey} id={h.objKey}>
              {h.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((obj) => {
          return (
            <tr
              key={obj.id}
              onClick={() => handleRowClick(obj)}
              style={{ cursor: 'pointer' }}
            >
              {getTableCells(obj)}
            </tr>
          );
        })}
      </tbody>
    </TableBS>
  );
};

export default Table;
