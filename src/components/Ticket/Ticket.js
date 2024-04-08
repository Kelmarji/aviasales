/* eslint-disable no-nested-ternary */
import React from 'react';

import t from './Ticket.module.scss';

const Segm = (props) => {
  const { date, destination, duration, origin, stops } = props.item;
  const sT = new Date(date); // вылет
  const eT = new Date(sT.getTime() + duration * 60 * 1000); // прилёт
  const durOut = new Date((duration - 180) * 60 * 1000);
  const timeFormat = (time) => {
    let hours = String(time.getHours()).split('');
    let minutes = String(time.getMinutes()).split('');
    if (minutes.length === 2) {
      minutes = minutes.join('');
    }
    if (hours.length === 2) {
      hours = hours.join('');
    }
    if (hours.length < 2) {
      hours = `0${String(time.getHours())}`;
    }
    if (minutes.length < 2) {
      minutes = `0${String(time.getMinutes())}`;
    }

    return `${hours}:${minutes}` === '00:00' ? '24:00' : `${hours}:${minutes}`;
  };

  return (
    <div className={t.ticketSegment}>
      <div className={t.segmentsInner}>
        <span className={t.time}>{`${origin} - ${destination}`}</span>
        <span>{`${timeFormat(sT)} - ${timeFormat(eT)}`}</span>
      </div>
      <div className={t.segmentsInner}>
        <span>В ПУТИ</span>
        <span className={t.way}>{timeFormat(durOut)}</span>
      </div>
      <div className={t.segmentsInner}>
        <span>
          {stops.length > 1 ? `${stops.length} пересадки` : stops.length === 1 ? '1 пересадка' : '0·пересадок'}
        </span>
        <span className={t.cunt}>{[stops.join(', ')]}</span>
      </div>
    </div>
  );
};

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket;
  const [first, second] = segments;
  return (
    <li className={t.ticketBody}>
      <div className={t.ticketTop}>
        <h1 className={t.price}>{price}</h1>
        <img src={`http://pics.avs.io/110/40/${carrier}.png`} />
      </div>
      <Segm item={first} />
      <Segm item={second} />
    </li>
  );
};

export default Ticket;
