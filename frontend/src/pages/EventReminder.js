import { useEffect } from 'react'
import EventReminderDetails from '../components/EventReminderDetails'
import { useEventReminderContext } from '../hooks/useEventReminderContext'

export default function EventReminder() {
    const {reminders, dispatch} = useEventReminderContext()
    // const [reminders, setReminders] = useState(null)      

    useEffect(()=>{
        const fetchReminder = async () =>{
            const response = await fetch('/api/eventrem')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'GET_ALLREMINDERS', payload: json})
                // setReminders(json)
            }
        }

        fetchReminder()
    }, [dispatch])

    return (
        <div>
            <div>
                {reminders && reminders.map((reminder) => (
                    <EventReminderDetails key={reminder._id} reminder={reminder}/>
                ))}
            </div>
        </div>
    )
}
