import React from 'react'
import {useEventReminderContext} from '../hooks/useEventReminderContext'

const EventDetails = ({Event}) => {
    const {dispatch} = useEventReminderContext()

    const handleClick = async()=>{
        const response = await fetch('/api/eventrem/'+Event._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if (response.ok){
            dispatch({type:'DELETE_EVENT', payload:json})
        }
    }
    return (
        <div className="carousel-item">
            <div className="card w-96 bg-base-200 text-white-content">
                <div className="card-body">
                    <h2 className="card-title">{Event.title}</h2>
                    
                    <p>{Event.desc}</p>
                    <p>Scheduled: {Event.target}</p>
                    <p>Status: {Event.validity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent" onClick={handleClick}>Delete Reminder</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails
