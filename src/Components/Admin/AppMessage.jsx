import { useEffect } from "react";

// Component: AppMessage
// Purpose: transient feedback alert used by admin components.
// Props: message (string), showMessage (bool), setShowMessage, setMessage
// Behavior: automatically hides after 3 seconds.
export default function AppMessage({ message, setShowMessage, setMessage, showMessage }) {

    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false);
                setMessage('')
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showMessage]);

    return (
        <>
            {
                showMessage &&
                <div>
                    <h3 className="alert alert-info position-fixed bottom-0 start-50 translate-middle z-3 w-75" role="alert">{message}</h3>
                </div>
            }
        </>
    )
}