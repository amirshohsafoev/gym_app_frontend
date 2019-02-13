import React from "react";
// , { PropTypes }

class EditUserForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <br />
          <input
            name="first_name"
            label="First name"
            value={this.props.user.first_name}
            onChange={this.props.onChange}
          />
          <br />
          <input
            name="last_name"
            label="Last name"
            value={this.props.user.last_name}
            onChange={this.props.onChange}
          />
          <br />
          <input
            name="email"
            label="Email"
            value={this.props.user.email}
            onChange={this.props.onChange}
          />
          <br />
          <input
            name="age"
            label="Age"
            value={this.props.user.age}
            onChange={this.props.onChange}
          />

          <br />
          <input
            name="picture_url"
            label="Picture"
            value={this.props.user.picture_url}
            onChange={this.props.onChange}
          />

          <br />
          <input
            name="height"
            label="Height"
            value={this.props.user.height}
            onChange={this.props.onChange}
          />
          <br />
          <input
            name="weight"
            label="Weight"
            value={this.props.user}
            onChange={this.props.onChange}
          />

          <br />
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

export default EditUserForm;
