
export const Login = (state) => (
    <div >
        <div container spacing={4} direction="column">
            <form  name="Login">
                <div>{password}{username}</div>
                <div>
                    <input type="text" name="username"
                               label="Username"
                    />
                </div>
                <div>
                    <input type="password" name="password"
                               label="Password"
                    />
                </div>
                <div>
                    <button type="submit" value="Login">Login</button>
                </div>
            </form>
        </div>
    </div>
)
