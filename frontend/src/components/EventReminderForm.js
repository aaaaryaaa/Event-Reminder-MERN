import React, { useState } from 'react';
import { useEventReminderContext } from '../hooks/useEventReminderContext';

export default function EventReminderForm() {
    //default date
    var curr = new Date();
    curr.setDate(curr.getDate() + 1);
    var date = curr.toISOString().substring(0, 10);

    //using context
    const { dispatch } = useEventReminderContext()

    //setting states
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [target, setTarget] = useState(curr)
    const [validity, setValidity] = useState('')
    const [error, setError] = useState(null)

    //handling form submission
    const handleSubmit = async (e) => {
        e.preventDefault()

        const reminder = { title, desc, target, validity }

        const response = await fetch('/api/eventrem', {
            method: 'POST',
            body: JSON.stringify(reminder),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setTitle('')
            setDesc('')
            setTarget(null)
            setError(null)
            console.log('New workout added', json)
            dispatch({ type: 'CREATE_REMINDER', payload: json })
        }
    }

    return (
        <div className="collapse bg-base-200 col-span-1">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                Click to add a Reminder
            </div>
            <div className="collapse-content">
                <div className="grid h-[36rem]">
                    <form onSubmit={handleSubmit} className="text-start">

                        <div className='flex flex-col p-3'>
                            <label htmlFor="title">Enter Title: </label>
                            <input id="title" type="text" value={title} placeholder="Enter Title" onChange={(e) => { setTitle(e.target.value) }} className="input input-bordered input-accent w-full max-w-xs" />
                        </div>

                        <div className='flex flex-col p-3'>
                            <label htmlFor="desc">Add Description: </label>
                            <textarea id="desc" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="textarea textarea-bordered textarea-accent w-full max-w-xs row-span-4" rows={5} />
                        </div>

                        <div className='flex flex-col p-3'>
                            <label htmlFor="target">Pick date to schedule your reminder: </label>
                            <input id="target" type="date" defaultValue={date}
                                onChange={(e) => {
                                    setTarget(new Date(e.target.value + "T00:00:00.000Z"))
                                }}
                                className='input input-bordered input-accent w-full max-w-xs' />
                        </div>

                        <div className='p-3'>
                            <button className='btn btn-outline btn-accent'
                                onClick={() => {
                                    if(target.getFullYear()-curr.getFullYear()) setValidity('expired')
                                    else if(target.getMonth()-curr.getMonth()>0) setValidity('year')
                                    else if(target.getDate()-curr.getDate()<0) setValidity('expired')
                                    else if(target.getDate()-curr.getDate()<=7) setValidity('week')
                                    else if(target.getDate()-curr.getDate()<=30) setValidity('month')
                                }}>Submit</button>
                        </div>
                    </form>
                    {error &&
                        <div className='outline mx-3 outline-red-600 rounded-lg p-2 bg-red-200 text-red-600'>{error}</div>
                    }
                </div>
            </div>
        </div>
    )
}
