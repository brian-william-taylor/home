import React from 'react'
import Router from 'react-router'

class SearchGitHub extends React.Component {
    handleSubmit() {
        var username = this.usernameRef.value;
        this.usernameRef.value = "";
        this.props.history.pushState(null, "/profile/" + username);

    }

    getRef(ref) {
        this.usernameRef = ref;
    }

    render() {
        return (
            <div className="col-sm-12">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" ref={this.getRef.bind(this)} />
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-block btn-primary">Search Github</button>
                    </div>
                </form>
            </div>
        )
    }
}

SearchGitHub.propTypes = {
    history: React.PropTypes.object.isRequired
}

export default SearchGitHub
