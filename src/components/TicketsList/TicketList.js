import React from 'react';
import { useSelector } from 'react-redux';
import * as antd from 'antd';

import Ticket from '../Ticket/Ticket';

const TicketList = () => {
  const sliceTicket = useSelector((state) => state.sliceTicket);
  let tickets = useSelector((state) => state.tickets);
  const err = useSelector((state) => state.errorMsg);
  const searchId = useSelector((state) => state.searchId);
  const filtersCheck = useSelector((state) => state.filterCheck);
  const filtersSort = useSelector((state) => state.filterTickets);
  if (searchId.split(' ').length > 1 || err !== 'no errors here') {
    return (
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <antd.Alert message="Технические Неполадки" description={searchId} type="warning" showIcon />;
          <antd.Spin />
        </div>
      </ul>
    );
  }
  if (filtersSort === 'optimal') {
    tickets.sort((A, B) => A.price / A.segments[0].duration - B.price / B.segments[0].duration);
  }
  if (filtersSort === 'cheap') {
    tickets.sort((A, B) => A.price - B.price);
  }
  if (filtersSort === 'faster') {
    tickets.sort((A, B) => A.segments[0].duration - B.segments[0].duration);
  }
  const { noTrans, trans1, trans2, trans3 } = filtersCheck;
  if (noTrans) {
    tickets = tickets.filter((t) => t.segments[0].stops.length === 0 && t.segments[1].stops.length === 0);
  }
  if (trans1 && trans2 && trans3) tickets = tickets.filter((t) => t);
  if (trans1 && !trans2 && !trans3)
    tickets = tickets.filter((t) => t.segments[0].stops.length === 1 && t.segments[1].stops.length === 1);
  if (trans1 && trans2 && !trans3)
    tickets = tickets.filter(
      (t) =>
        (t.segments[0].stops.length === 1 && t.segments[1].stops.length === 1) ||
        (t.segments[0].stops.length === 2 && t.segments[1].stops.length === 2)
    );
  if (trans1 && !trans2 && trans3)
    tickets = tickets.filter(
      (t) =>
        (t.segments[0].stops.length === 1 && t.segments[1].stops.length === 1) ||
        (t.segments[0].stops.length === 3 && t.segments[1].stops.length === 3)
    );
  if (!trans1 && trans2 && !trans3)
    tickets = tickets.filter((t) => t.segments[0].stops.length === 2 && t.segments[1].stops.length === 2);
  if (!trans1 && trans2 && trans3)
    tickets = tickets.filter(
      (t) =>
        (t.segments[0].stops.length === 2 && t.segments[1].stops.length === 2) ||
        (t.segments[0].stops.length === 3 && t.segments[1].stops.length === 3)
    );
  if (!trans1 && !trans2 && trans3)
    tickets = tickets.filter((t) => t.segments[0].stops.length === 3 && t.segments[1].stops.length === 3);

  if (tickets.length === 0) {
    return (
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <antd.Alert
            message="Нам очень жаль."
            description={'Рейсов, подходящих под заданные фильтры, не найдено'}
            type="warning"
            showIcon
          />
          ;
          <antd.Spin />
        </div>
      </ul>
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
