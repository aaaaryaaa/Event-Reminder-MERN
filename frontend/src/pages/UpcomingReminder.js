import ExpiredReminder from '../components/ExpiredReminder'
import MonthReminder from '../components/MonthReminder'
import WeekReminder from '../components/WeekReminder'

export default function UpcomingReminder() {

    return (
        <div className="mt-16 mx-24">
            <ExpiredReminder />
            <WeekReminder />
            <MonthReminder />
        </div>
    )
}
