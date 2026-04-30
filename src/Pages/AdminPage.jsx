import { useEffect, useState, useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"
import AppAdminTrip from "../Components/Admin/AppAdminTrip"
import AppAdminTraveler from "../Components/Admin/AppAdminTraveler"

// Page: AdminPage
// Purpose: admin area that toggles between trip list and travelers list for a selected trip.
// Keeps local UI state for messages and selected trip id.
export default function AdminPage() {

    const { data, setData } = useContext(GlobalContext)
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState("")
    const [idTrip, setIdTrip] = useState(-1)
    const [sortByStartDate, setbyStartDate] = useState(data.sort((a, b) => {
        return new Date(a.start_date) - new Date(b.start_date)
    }))

    // Keep sorted trips updated whenever global data changes
    useEffect(() => {
        setbyStartDate(data.sort((a, b) => {
            return new Date(a.start_date) - new Date(b.start_date)
        }))
    }, [data]) 

    return (
        <main>

            <div className="container">
                <div className="row p-2 gap-2">
                    {
                        idTrip === -1 &&
                        <AppAdminTrip
                            data={data}
                            setData={setData}
                            showMessage={showMessage}
                            setShowMessage={setShowMessage}
                            message={message}
                            setMessage={setMessage}
                            idTrip={idTrip}
                            setIdTrip={setIdTrip}
                            sortByStartDate={sortByStartDate}
                        />
                    }

                    {
                        idTrip !== -1 &&
                        <AppAdminTraveler
                            data={data}
                            setData={setData}
                            showMessage={showMessage}
                            setShowMessage={setShowMessage}
                            message={message}
                            setMessage={setMessage}
                            idTrip={idTrip}
                            setIdTrip={setIdTrip}
                        />
                    }

                </div>
            </div>
        </main>
    )
}