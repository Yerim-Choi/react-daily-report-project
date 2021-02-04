import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialCosts = [
  {
    id: 1,
    text: '2021 다이어리 구매',
    money: 12000,
    done: false
  },
  {
    id: 2,
    text: '스타벅스 원두 구입',
    money: 15000,
    done: false
  },
  {
    id: 3,
    text: 'IT프로그래밍 도서 구입',
    money: 32000,
    done: false
  }
];

function costReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const CostStateContext = createContext();
const CostDispatchContext = createContext();
const CostNextIdContext = createContext();

export function CostProvider({ children }) {
  const [state, dispatch] = useReducer(costReducer, initialCosts);
  const nextId = useRef(5);

  return (
    <CostStateContext.Provider value={state}>
      <CostDispatchContext.Provider value={dispatch}>
        <CostNextIdContext.Provider value={nextId}>
          {children}
        </CostNextIdContext.Provider>
      </CostDispatchContext.Provider>
    </CostStateContext.Provider>
  );
}

export function useCostState() {
  const context = useContext(CostStateContext);
  if (!context) {
    throw new Error('Cannot find CostProvider');
  }
  return context;
}

export function useCostDispatch() {
  const context = useContext(CostDispatchContext);
  if (!context) {
    throw new Error('Cannot find CostProvider');
  }
  return context;
}

export function useCostNextId() {
  const context = useContext(CostNextIdContext);
  if (!context) {
    throw new Error('Cannot find CostProvider');
  }
  return context;
}