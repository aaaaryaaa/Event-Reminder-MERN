import React from 'react'

export default function EventReminderDetails({ reminder }) {
    return (
        <div className="carousel-item">
            <div className="card w-96 bg-base-200 text-white-content">
                <div className="card-body">
                    <h2 className="card-title">{reminder.title}</h2>
                    
                    <p>{reminder.desc}</p>
                    <p>Scheduled: {reminder.target}</p>
                    <p>Status: {reminder.validity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent">Delete Reminder</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
