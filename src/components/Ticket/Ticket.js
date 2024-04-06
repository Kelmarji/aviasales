import React from 'react';

import t from './Ticket.module.scss';

const Ticket = ({ ticket }) => {
  const { price, carrier } = ticket;
  return (
    <li className={t.ticketBody}>
      <div className={t.ticketTop}>
        <h1 className={t.price}>{price}</h1> <img src={`http://pics.avs.io/110/40/${carrier}.png`} />
      </div>
      <div className={t.ticketMid}>
        <span className={t.time}>10:45 - 8:00</span>
        <span className={t.way}>21ч 15м</span>
        <span className={t.cunt}>HKG, JNB</span>
      </div>
      <div className={t.ticketBot}>
        <span className={t.time}>10:45 - 8:00</span>
        <span className={t.way}>21ч 15м</span>
        <span className={t.cunt}>HKG, JNB</span>
      </div>
    </li>
  );
};

export default Ticket;
