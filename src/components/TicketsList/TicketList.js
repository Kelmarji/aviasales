import React from 'react';

const TicketList = () => {
  const testintTick = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ticketElem = testintTick.map((item) => {
    return (
      <li style={{ width: '100%', height: '100px', border: '1px solid black' }} key={item * 11}>
        {item}
      </li>
    );
  });
  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {ticketElem.slice(0, 5)}
    </ul>
  );
};
export default TicketList;
