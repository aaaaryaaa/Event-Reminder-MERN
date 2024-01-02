import { useEffect } from 'react'
import { useEventReminderContext } from '../hooks/useEventReminderContext'
import EventReminderDetails from './EventReminderDetails'

export default function ExpiredReminder() {
    const { expiredreminders, weekreminders, monthreminders, yearreminders, dispatch } = useEventReminderContext()

    useEffect(() => {
        const fetchReminder = async () => {
            const response = await fetch('/api/eventrem')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'GET_UPCOMINGREMINDERS', payload: json })
            }

        }

        fetchReminder()
    }, [dispatch])

    return (
        <div className="mx-10 grid grid-rows">
            <div className="carousel carousel-center max-w-2xl h-96 p-4 space-x-4 bg-neutral rounded-box">
                {expiredreminders && expiredreminders.map((reminder) => (
                    <EventReminderDetails key={reminder._id} reminder={reminder} />
                ))}
            </div>
            <div className="carousel carousel-center max-w-2xl h-96 p-4 space-x-4 bg-neutral rounded-box">
                {weekreminders && weekreminders.map((reminder) => (
                    <EventReminderDetails key={reminder._id} reminder={reminder} />
                ))}
            </div>
            <div className="carousel carousel-center max-w-2xl h-96 p-4 space-x-4 bg-neutral rounded-box">
                {monthreminders && monthreminders.map((reminder) => (
                    <EventReminderDetails key={reminder._id} reminder={reminder} />
                ))}
            </div>
            <div className="carousel carousel-center max-w-2xl h-96 p-4 space-x-4 bg-neutral rounded-box">
                {yearreminders && yearreminders.map((reminder) => (
                    <EventReminderDetails key={reminder._id} reminder={reminder} />
                ))}
            </div>
        </div>
    )
}
