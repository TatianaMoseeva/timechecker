
import { Component } from "react";
import ErrorMsg from "../errorMsg/ErrorMsg";

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorMsg />;
        }
        return this.props.children; 
    }
}

export default ErrorBoundary;