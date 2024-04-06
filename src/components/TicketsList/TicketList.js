import React from 'react';
import { useSelector } from 'react-redux';

import Ticket from '../Ticket/Ticket';

const TicketList = () => {
  const sliceTicket = useSelector((state) => state.sliceTicket);
  const { tickets } = useSelector((state) => state.tickets);
  console.log(tickets);
  if (typeof tickets === 'undefined') {
    return (
      <ul
        style={{ width: '500px', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}
      />
    );
  }
  const ticketElem = tickets.map((item, index) => {
    return <Ticket key={`${index}ticket`} ticket={item} />;
  });
  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {ticketElem.slice(0, sliceTicket)}
    </ul>
  );
};
export default TicketList;
