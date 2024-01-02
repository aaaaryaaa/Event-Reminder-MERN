import React from 'react'
import { useEventReminderContext } from '../hooks/useEventReminderContext'

export default function EventReminderDetails({ reminder }) {
    const { dispatch } = useEventReminderContext()
    
    const handleDelete = async () => {
        const response = await fetch('/api/eventrem/' + reminder._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_REMINDER', payload: json})
        }
    }

    return (
        <div className="carousel-item">
            <div className="card w-96 bg-base-200 text-white-content">
                <div className="card-body">
                    <h2 className="card-title">{reminder.title}</h2>
                    
                    <p>{reminder.desc}</p>
                    <p>Scheduled: {reminder.target}</p>
                    <p>Status: {reminder.validity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent" onClick={handleDelete}>Delete Reminder</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
