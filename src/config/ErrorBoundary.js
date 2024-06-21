import React, { Component } from 'react';
import ErrorPage from "../veiws/ErrorPage/ErrorPage";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by Error Boundary: ", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage/>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
