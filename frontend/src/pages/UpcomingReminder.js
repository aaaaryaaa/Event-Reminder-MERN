import { useEffect } from "react"
import EventReminderDetails from "../components/EventReminderDetails"
import { useEventReminderContext } from "../hooks/useEventReminderContext"

export default function UpcomingReminder() {
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
        <div className="mx-10 grid grid-rows-2 grid-flow-col gap-10">
            <div className="block">
                <div className="ml-10">Expired : </div>
                <div className="carousel carousel-center max-w-2xl h-72 p-4 m-2 space-x-4 bg-neutral rounded-box">
                    {expiredreminders && expiredreminders.map((reminder) => (
                        <EventReminderDetails key={reminder._id} reminder={reminder} />
                    ))}
                </div>
            </div>

            <div>
                <div className="ml-10">In 7 days : </div>
                <div className="carousel carousel-center max-w-2xl h-72 p-4 m-2 space-x-4 bg-neutral rounded-box">
                    {weekreminders && weekreminders.map((reminder) => (
                        <EventReminderDetails key={reminder._id} reminder={reminder} />
                    ))}
                </div>
            </div>

            <div>
                <div className="ml-10">In 30 days: </div>
                <div className="carousel carousel-center max-w-2xl h-72 p-4 m-2 space-x-4 bg-neutral rounded-box">
                    {monthreminders && monthreminders.map((reminder) => (
                        <EventReminderDetails key={reminder._id} reminder={reminder} />
                    ))}
                </div>
            </div>

            <div>
                <div className="ml-10">More than 30 days: </div>
                <div className="carousel carousel-center max-w-2xl h-72 p-4 m-2 space-x-4 bg-neutral rounded-box">
                    {yearreminders && yearreminders.map((reminder) => (
                        <EventReminderDetails key={reminder._id} reminder={reminder} />
                    ))}
                </div>
            </div>
        </div>
    )
}

