

export default function Dashboard () {
    return(
        <div className="flex-1 p-10 space-y-6">
            <div className="grid grid-cols-4 gap-6">
                <div className="card">Projects</div>
                <div className="card">Tasks</div>
                <div className="card">Time</div>
                <div className="card">Progress</div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="card">Today's Tasks</div>
                <div className="card">Recent Projects</div>
            </div>
        </div>
    )
}