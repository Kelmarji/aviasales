import React from 'react';
import { useSelector } from 'react-redux';

import Ticket from '../Ticket/Ticket';

const TicketList = () => {
  const sliceTicket = useSelector((state) => state.sliceTicket);
  const tickets = useSelector((state) => state.tickets);
  const ticketElem = tickets.map((item) => {
    return <Ticket key={item * 11} title={item} />;
  });
  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {ticketElem.slice(0, sliceTicket)}
    </ul>
  );
};
export default TicketList;
