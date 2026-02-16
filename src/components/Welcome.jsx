function LoginControl({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? (
                <span>Welcome back! <button>Logout</button></span>
            ) : (
                <button>Login</button>
            )}
        </div>
    );
}
export default LoginControl;
