const Popup = ({message, onReplay}) => {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <p className="popup-message">{message}</p>
                <button className="popup-btn" onClick={onReplay}>
                    Replay
                </button>
            </div>
        </div>
    )
}


export default Popup;