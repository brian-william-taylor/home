import React from 'react';

class AddNote extends React.Component {


    //Handles the submit
    handleSubmit() {
        var newNote = this.note.value;
        this.note.value = '';
        this.props.addNote(newNote)
    }


    //Sets the value for ref
    setRef(ref) {
        this.note = ref;
    }


    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Add New Note" ref={this.setRef.bind(this)} />
                <span className="input-group-button">
                    <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
                </span>
            </div>
        )
    }
}

AddNote.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
}


export default AddNote
