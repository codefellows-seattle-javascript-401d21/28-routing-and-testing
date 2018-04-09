import '../../style/main.scss';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from '../landing/index';
import Dashboard from '../dashboard/index';

class App extends React.Component {
    render() {
        return (
            <div className='application'>
                <BrowserRouter>
                    <div>
                        <header className="header">
                            <ul className="navbar">
                                <li><Link className='navlink navlink-left' to="/"><h1 className='logo'>Shopping List</h1></Link></li>
                                <li><Link className='navlink navlink-right' to="/"><h1>landing page</h1></Link></li>
                                <li><Link className='navlink navlink-right' to="/dashboard"><h1>make your list!</h1></Link></li>
                            </ul>
                        </header>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/dashboard' component={Dashboard} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;