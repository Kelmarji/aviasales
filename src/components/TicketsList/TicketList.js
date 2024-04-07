import React from 'react';
import { useSelector } from 'react-redux';

import Ticket from '../Ticket/Ticket';

const TicketList = () => {
  const sliceTicket = useSelector((state) => state.sliceTicket);
  let tickets = useSelector((state) => state.tickets);
  const filtersCheck = useSelector((state) => state.filterCheck);
  const filtersSort = useSelector((state) => state.filterTickets);
  if (filtersSort === 'optimal') {
    tickets.sort((A, B) => A.price / A.segments[0].duration - B.price / B.segments[0].duration);
  }
  if (filtersSort === 'cheap') {
    tickets.sort((A, B) => A.price - B.price);
  }
  if (filtersSort === 'faster') {
    tickets.sort((A, B) => A.segments[0].duration - B.segments[0].duration);
  }
  const { All, noTrans, trans1, trans2, trans3 } = filtersCheck;
  if (noTrans) {
    tickets = tickets.filter((t) => t.segments[0].stops.length === 0 && t.segments[1].stops.length === 0);
  }
  if (All || (trans1 && trans2 && trans3)) {
    tickets = tickets.filter((item) => item);
  }
  if (!All && trans1) tickets = tickets.filter((t) => t.segments[0].stops.length === 1 && t.segments[1].stops.length === 1);
  console.log(filtersCheck);
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
