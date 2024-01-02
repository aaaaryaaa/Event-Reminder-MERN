import { useEffect } from 'react'
import EventReminderDetails from '../components/EventReminderDetails'
import { useEventReminderContext } from '../hooks/useEventReminderContext'

export default function UpcomingReminder() {
    const { weekreminders, dispatch } = useEventReminderContext()

    useEffect(() => {
        const fetchReminder = async () => {
            const response = await fetch('/api/eventrem')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'GET_WEEKREMINDERS', payload: json })
            }

        }

        fetchReminder()
    }, [dispatch])

    return (
        <div className="carousel carousel-center max-w-2xl h-96 p-4 space-x-4 bg-neutral rounded-box">
            {weekreminders && weekreminders.map((reminder) => (
                <EventReminderDetails key={reminder._id} reminder={reminder} />
            ))}
        </div>
    )
}
