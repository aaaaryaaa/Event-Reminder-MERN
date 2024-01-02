import { createContext, useReducer } from "react";

export const EventReminderContext = createContext()

const eventReminderReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALLREMINDERS':
            return {
                reminders: action.payload
            }
        case 'CREATE_REMINDER':
            return {
                reminders: [action.payload, ...state.reminders]
            }
        case 'DELETE_REMINDER':
            return {
                reminders: state.reminders.filter((r) =>
                    r._id !== action.payload._id
                )
            }
        case 'GET_EXPIREDREMINDERS':
            return {
                expiredreminders: action.payload.filter((r) =>
                    r.validity === 'expired'
                )
            }
        case 'GET_WEEKREMINDERS':
            return {
                weekreminders: action.payload.filter((r) =>
                    r.validity === 'week'
                )
            }
        case 'GET_MONTHREMINDERS':
            return {
                monthreminders: action.payload.filter((r) =>
                    r.validity === 'month'
                )
            }
        case 'GET_YEARREMINDERS':
            return {
                yearreminders: action.payload.filter((r) =>
                    r.validity === 'year'
                )
            }
        default:
            return state
    }
}

export const EventReminderContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(eventReminderReducer, {
        reminders: null,
        expiredreminders: null,
        weekreminders: null,
        monthreminders: null,
        yearreminders: null
    })

    return (
        <EventReminderContext.Provider value={{ ...state, dispatch }}>
            {children}
        </EventReminderContext.Provider>
    )
}