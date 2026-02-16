function Notifications({ unreadMessages }) {
    return (
        <div>
            <h3>Inbox</h3>
            {/* If unreadMessages is 0 (falsy), nothing renders.
          If > 0 (truthy), the div renders. */}
            {unreadMessages > 0 && (
                <div className="badge">
                    You have {unreadMessages} unread messages!
                </div>
            )}
        </div>
    );
}

export default Notifications;
