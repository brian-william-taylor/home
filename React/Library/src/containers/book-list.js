import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

// React redux is the glue that connects react and redux. React controlls views
// while Redux controlls the state/data of the application

class BookList extends Component {
    renderList() {
        return this
            .props
            .books
            .map((book) => {
                return (
                    <li
                        key={book.title}
                        onClick={() => this.props.selectBook(book)}
                        className="list-group-item">
                        {book.title}
                    </li>
                )
            });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of Booklist
    return {books: state.books};
}

function mapDispatchToProps(dispatch) {
    // Whenever select book is called, the result should be passwed to all of our
    // reducers
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch)
}

// Promote BookList from a component to a container - it nneds to know about this
// new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);