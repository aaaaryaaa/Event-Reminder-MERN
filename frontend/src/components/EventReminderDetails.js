import React from 'react'

export default function EventReminderDetails({ reminder }) {
    return (
        <div>
            <h4>{reminder.title}</h4>
            <p>{reminder.desc}</p>
            <p>Scheduled: {reminder.target}</p>
            <p>Status: {reminder.validity}</p>
        </div>
    )
}
