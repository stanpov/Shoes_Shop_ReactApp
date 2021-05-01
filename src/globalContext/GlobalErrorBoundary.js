import { Component } from 'react';

class GlobalErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error) {
        console.log('Gloabal Error from componentDidCatch: ', error);
    }


    render () {
        if(this.state.hasError) {
            return (
                <div className="error_div_warning">
                <h1>Something went wrong!</h1>
                <img className="warning_img" src="https://news.blr.com/app/uploads/sites/3/2019/09/Warning-Sign.jpg" alt="warning_image" />
                </div>
            )
        }

        return this.props.children
    }
   
}

export default GlobalErrorBoundary;