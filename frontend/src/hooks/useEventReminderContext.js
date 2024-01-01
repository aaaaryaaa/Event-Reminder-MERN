import { useContext } from "react";
import { EventReminderContext } from "../context/EventReminderContext";

export const useEventReminderContext = () => {
    const context = useContext(EventReminderContext)

    if(!context){
        throw Error("useEventReminderContext should be used inside EventReminderContextProvider")
    }

    return context
}