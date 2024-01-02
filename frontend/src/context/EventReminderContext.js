import { createContext, useReducer } from "react";

export const EventReminderContext = createContext()

const eventReminderReducer = (state, action) => {
    switch(action.type) {
        case 'GET_ALLREMINDERS': 
            return{
                reminders: action.payload
            }
        case 'CREATE_REMINDER':
            return{
                reminders: [action.payload, ...state.reminders]
            }
        case 'DELETE_REMINDER':
            return{
                reminders: state.reminders.filter((r)=>
                    r._id !== action.payload._id
                )
            }
        default:
            return state
    }
}

export const EventReminderContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(eventReminderReducer, {
        reminders: null
    })

    return (
        <EventReminderContext.Provider value = {{...state, dispatch}}>
            {children}
        </EventReminderContext.Provider>
    )
}