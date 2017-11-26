import { RFModule } from "@trp/react-framework/Module"
import ProtectedLayout from "./src/Layouts/ProtectedLayout"
import PublicLayout from "./src/Layouts/PublicLayout"
import Login from "./src/UI/Login"

@RFModule({
    ModuleName: "Auth",
    layoutComponents: {
        "App.EmptyLayout": {
            main: [
                ProtectedLayout,
                PublicLayout,
                Login
            ]
        }
    }
})
export class AuthModule {}