import React, {PropTypes, Component} from 'react';

class AboutPage extends Component {
    render () {
        return (  
            <div className="jumbotron">
                <h1>{this.props.route.header}</h1>
                <p>Content of About page</p>
            </div>

        );
    }
}

export default AboutPage;