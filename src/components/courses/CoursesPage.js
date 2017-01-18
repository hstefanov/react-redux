import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class CoursesPage extends Component {

    constructor(props,context){
        super(props,context);
    }

    render () {
        const {courses} = this.props;
        return (
            <div>
                <h1>{this.props.route.header}</h1>
                <CourseList courses={courses} />
            </div>
        );
    }
}

// What props to expose to component
function mapStateToProps(state,ownProps){
    //debugger;
    return {
        // reselect library memoization
        // in root reducer index.js which return courses
        courses : state.courses
    };
}

// What actions to expose to component
function mapDispatchToProps(dispatch){
    return {
        //createCourse : (course) => dispatch(courseActions.createCourse(course))
        actions : bindActionCreators(courseActions,dispatch)
    }
}

CoursesPage.propTypes = {
    actions : PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);