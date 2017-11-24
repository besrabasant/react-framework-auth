import { RFModule } from "@trp/react-framework/Module"
import Auth from "./src/Auth"
import ProtectedLayout from "./src/Layouts/ProtectedLayout"
import PublicLayout from "./src/Layouts/PublicLayout"

@RFModule({
    Component: Auth,
    layouts:[
        ProtectedLayout,
        PublicLayout
    ],
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