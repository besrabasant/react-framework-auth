import { RFModule } from "@trp/react-framework/Module"
import Auth from "./src/Auth"

@RFModule({
    Component: Auth,
    layoutConfig:{
        "App.EmptyLayout": {
            main: "HelloWorld"
        },
        "App.DashboardLayout": {
            main: "HelloWorld"
        }
    }
})
export class AuthModule {}