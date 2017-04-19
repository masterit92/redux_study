import * as types from './actionTypes';
import courseApi from '../api/mockCoruseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS , courses};
}

export function createCoursesSuccess(course) {
  return { type: types.CREATE_COURSES_SUCCESS , course};
}

export function updateCoursesSuccess(course) {
  return { type: types.UPDATE_COURSES_SUCCESS , course};
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw (error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(saveCourse => {
      course.id ? dispatch(updateCoursesSuccess(saveCourse)) : dispatch(createCoursesSuccess(saveCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
