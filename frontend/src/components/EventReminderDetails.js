import React from 'react'
import { useEventReminderContext } from '../hooks/useEventReminderContext'

export default function EventReminderDetails({ reminder }) {
    const { dispatch } = useEventReminderContext()

    let validityStatus
    switch (reminder.validity) {
        case 'week': validityStatus = 'in 7 days'
            break
        case 'expired': validityStatus = 'expired'
            break
        case 'month': validityStatus = 'in 30 days'
            break
        case 'year': validityStatus = 'more than 30 days'
            break
        default: validityStatus = 'soon'
    }

    const handleDelete = async () => {
        const response = await fetch('/api/eventrem/' + reminder._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_REMINDER', payload: json })
        }
    }
    return (
        <div className="carousel-item">
            <div className="card w-96 bg-base-200 text-white-content">
                <div className="card-body">
                    <h2 className="card-title text-3xl">{reminder.title}</h2>

                    <p>Description:<br />{reminder.desc}</p>
                    <p>Scheduled: {reminder.target.toString().substring(0, 10)}</p>
                    <p>
                        Status: {validityStatus}
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent btn-outline font-extrabold" onClick={handleDelete}>Delete Reminder</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
