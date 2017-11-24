import React from "react"
import { Layout } from "@trp/react-framework/Decorators"

@Layout({
    sections: [
        "main"
    ]
})
export default class PublicLayout extends React.Component {
    render() {
        return (
            <div>
                { this.props.sections.main }
            </div>
        )
    }
}