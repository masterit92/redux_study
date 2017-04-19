import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors})=> {
  return (
    <form>
      <h1>Course Manage</h1>
      <TextInput
        name="title"
        label="Title"
        onChange={onChange}
        value={course.title}
        error={errors.title}/>

      <SelectInput
        name="authorId"
        label="Author"
        onChange={onChange}
        value={course.authorId}
        defaultOption = "Select Author"
        options={allAuthors}
        error={errors.authorId}/>

      <TextInput
        name="category"
        label="Category"
        onChange={onChange}
        value={course.category}
        error={errors.category}/>

      <TextInput
        name="length"
        label="Length"
        onChange={onChange}
        value={course.length}
        error={errors.length}/>
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CourseForm;
