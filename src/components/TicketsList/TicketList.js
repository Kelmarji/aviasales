import React from 'react';

import Ticket from '../Ticket/Ticket';

const TicketList = () => {
  const testintTick = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ticketElem = testintTick.map((item) => {
    return <Ticket key={item * 11} title={item} />;
  });
  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {ticketElem.slice(0, 5)}
    </ul>
  );
};
export default TicketList;
