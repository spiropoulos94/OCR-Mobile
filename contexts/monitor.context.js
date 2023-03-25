import { createContext, useReducer } from "react";
import _ from 'lodash';

export const MonitoringContext = createContext({
    state: {},
    dispatch: () => null,
});

let initialState = {
    vision: 0,
    monitoring: 0
}

const reducer = (state = initialState, action) => {
    state = _.cloneDeep(state)
    const { type, payload } = action

    switch (type) {
        case 'UPDATE_MONITORING':
            return Object.assign({}, state, {
                vision: payload.vision,
                monitoring: payload.monitoring
            });
        default:
            return state
    }
}

export const MonitoringProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MonitoringContext.Provider value={{ state, dispatch }}>
            {children}
        </MonitoringContext.Provider>
    );
};