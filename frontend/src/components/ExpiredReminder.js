import { useEffect } from 'react'
import { useEventReminderContext } from '../hooks/useEventReminderContext'
import EventReminderDetails from './EventReminderDetails'

export default function ExpiredReminder() {
    const { expiredreminders, dispatch } = useEventReminderContext()

    useEffect(() => {
        const fetchReminder = async () => {
            const response = await fetch('/api/eventrem')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'GET_EXPIREDREMINDERS', payload: json })
            }

        }

        fetchReminder()
    }, [dispatch])

    return (
        <div className="carousel carousel-center max-w-2xl h-96 p-4 space-x-4 bg-neutral rounded-box">
            {expiredreminders && expiredreminders.map((reminder) => (
                <EventReminderDetails key={reminder._id} reminder={reminder} />
            ))}
        </div>
    )
}
