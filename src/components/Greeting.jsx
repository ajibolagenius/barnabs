function Greeting() {
    const user = 'BARNABS'
    const timeOfDay = new Date().getHours() < 12 ? 'Morning' : 'Evening'

    return (
        <div className="welcome-box">
            <h2>Good {timeOfDay}, {user}! </h2>
            <p>Welcome to the intensive React Course.</p>
        </div>
    )
}

export default Greeting;
