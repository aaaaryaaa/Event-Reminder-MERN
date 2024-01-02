import { useEffect } from 'react'
import EventReminderDetails from '../components/EventReminderDetails'
import EventReminderForm from '../components/EventReminderForm'
import { useEventReminderContext } from '../hooks/useEventReminderContext'

export default function EventReminder() {
    const { reminders, dispatch } = useEventReminderContext()
    // const [reminders, setReminders] = useState(null)      

    useEffect(() => {
        const fetchReminder = async () => {
            const response = await fetch('/api/eventrem')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'GET_ALLREMINDERS', payload: json })
                // setReminders(json)
            }
        }

        fetchReminder()
    }, [dispatch])

    return (
        <div className="grid grid-cols-4 mt-16 mx-24">
            <div className="col-span-3 p-10 mt-20">
                <div className="carousel carousel-center max-w-2xl h-96 p-4 space-x-4 bg-neutral rounded-box">
                    {reminders && reminders.map((reminder) => (
                        <EventReminderDetails key={reminder._id} reminder={reminder} />
                    ))}
                </div>
            </div>

            <EventReminderForm />
        </div>
    )
}
