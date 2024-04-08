/* eslint-disable no-await-in-loop */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable default-param-last */
/* eslint-disable prettier/prettier */
import { applyMiddleware, createStore, compose } from 'redux';
import { thunk } from 'redux-thunk';

import TicketService from '../services/aviaSales-service';

const TicketApi = new TicketService();

const searchId = await TicketApi.getSearchId();

export const arrayTickets = () => {
  return async (dispatch) => {
    let stopStatus = false;

    while (!stopStatus) {
      try {
        const tickets = await TicketApi.getTickets(searchId);

        dispatch({ type: 'LOAD_TICKETS', payload: tickets });
        stopStatus = tickets.stop;
      } catch (error) {
        // ignor materi
      }
    }
  };
};

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('old state', store.getState());
  const result = next(action);
  console.log('New state:', store.getState());
  return result;
};
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const defaultState = {
  searchId,
  filterCheck: { All: true, noTrans: false, trans1: true, trans2: true, trans3: true },
  filterTickets: 'optimal',
  tickets: [],
  loadedTickets: false,
  sliceTicket: 5,
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_TICKETS':
      return {
        ...state,
        tickets: state.tickets.concat(action.payload.tickets),
        loadedTickets: action.payload.stop ? action.payload.stop : false,
      };
    case 'sliceMore':
      return { ...state, sliceTicket: state.sliceTicket + 5 };
    case 'change_tickets_filter_CHEAP':
      return { ...state, filterTickets: 'cheap', sliceTicket: 5 };
    case 'change_tickets_filter_FASTER':
      return { ...state, filterTickets: 'faster', sliceTicket: 5 };
    case 'change_tickets_filter_OPTIMA':
      return { ...state, filterTickets: 'optimal', sliceTicket: 5 };
    case 'changeCheckboxAll':
      if (action.payload)
        return {
          ...state,
          filterCheck: { All: action.payload, noTrans: false, trans1: true, trans2: true, trans3: true },
        };
      return {
        ...state,
        filterCheck: { All: false, noTrans: false, trans1: false, trans2: false, trans3: false },
      };
    case 'changeCheckboxNoTrans':
      return {
        ...state,
        filterCheck: { All: false, noTrans: action.payload, trans1: false, trans2: false, trans3: false },
      };
    case 'changeCheckboxTrans1':
      return {
        ...state,
        filterCheck: { ...state.filterCheck, All: false, trans1: !state.filterCheck.trans1, noTrans: state.noTrans },
      };
    case 'changeCheckboxTrans2':
      return {
        ...state,
        filterCheck: { ...state.filterCheck, All: false, trans2: !state.filterCheck.trans2, noTrans: state.noTrans },
      };
    case 'changeCheckboxTrans3':
      return {
        ...state,
        filterCheck: { ...state.filterCheck, All: false, trans3: !state.filterCheck.trans3, noTrans: state.noTrans },
      };
    default:
      return state;
  }
};
const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, thunk)));

export default store;
