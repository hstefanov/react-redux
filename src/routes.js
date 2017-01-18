import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursePage from './components/courses/ManageCoursePage';

export default (
    <Route path="/" component={App} >
            <IndexRoute header="Home Page" component={HomePage} />
            <Route path="about" header="About page" component={AboutPage} />
            <Route path="course" header="Manage course page" component={ManageCoursePage} />
            <Route path="course/:id" header="Manage course page" component={ManageCoursePage} />
            <Route path="courses" header="Courses page" component={CoursesPage} />
    </Route>
);