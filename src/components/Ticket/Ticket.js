import React from 'react';

import t from './Ticket.module.scss';

const Segm = (props) => {
  const { date, destination, duration, origin, stops } = props.item;
  const sT = new Date(date); // вылет
  const eT = new Date(new Date(date).getTime() + duration * 60 * 100); // прилёт
  const time = `${sT.getHours()}:${sT.getMinutes()} - ${eT.getHours()}:${eT.getMinutes()}`;
  console.log(time);

  return (
    <div className={t.ticketSegment}>
      <div className={t.segmentsInner}>
        <span className={t.time}>{`${origin} - ${destination}`}</span>
        <span>{time}</span>
      </div>
      <div className={t.segmentsInner}>
        <span>время в пути</span>
        <span className={t.way}>{duration}</span>
      </div>
      <div className={t.segmentsInner}>
        <span>{`${stops.length} пересадок`}</span>
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
// /*
// interface Ticket {
//   // Цена в рублях
//   price: number
//   // Код авиакомпании (iata)
//   carrier: string
//   // Массив перелётов.
//   // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
//   segments: [
//     {
//       // Код города (iata)
//       origin: string
//       // Код города (iata)
//       destination: string
//       // Дата и время вылета туда
//       date: string
//       // Массив кодов (iata) городов с пересадками
//       stops: string[]
//       // Общее время перелёта в минутах
//       duration: number
//     },
//     {
//       // Код города (iata)
//       origin: string
//       // Код города (iata)
//       destination: string
//       // Дата и время вылета обратно
//       date: string
//       // Массив кодов (iata) городов с пересадками
//       stops: string[]
//       // Общее время перелёта в минутах
//       duration: number
//     }
//   ]
// }
// * /
