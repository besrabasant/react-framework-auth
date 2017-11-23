import React from "react"

export default class Auth extends React.Component {
    render() {
        return React.Children.only(this.props.children)
    }
}