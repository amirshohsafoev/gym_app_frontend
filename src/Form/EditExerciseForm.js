import React from "react";
// , { PropTypes }
class EditExerciseForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            name="reps"
            label="Reps"
            value={this.props.exercise.reps}
            onChange={this.props.onChange}
          />

          <input
            name="sets"
            label="Sets"
            value={this.props.exercise.sets}
            onChange={this.props.onChange}
          />

          <input
            name="weight"
            label="Weight"
            value={this.props.exercise.weight}
            onChange={this.props.onChange}
          />

          <input
            type="submit"
            disabled={this.props.saving}
            className="btn btn-primary"
            onClick={this.props.onSave}
          />
        </form>
      </div>
    );
  }
}

export default EditExerciseForm;
