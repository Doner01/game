import AppRouter from "./appRouter"
import AuthRouter from "./authRouter"

const App = () => {
    let isLoggin = true
    return isLoggin ? <AppRouter/> : <AuthRouter/>
}

export default App