import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Project from './Project';
import Footer from './Footer';

class App extends Component {
    componentDidMount() {
        document.title = 'Marcus Haddon';
    }

    render() {
        return (
            <div>
                <Router>
                    <div className='app-wrapper'>
                        <Route path='/' exact={true} component={Home} />

                        <Route path='/projects' exact={true} component={Projects} />

                        <Route path='/projects/:project' exact={true} component={Project} />
                    
                    </div>
                </Router>

                <Footer />
            </div>
            
        );
    }
}

export default App;