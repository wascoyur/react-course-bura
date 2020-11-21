import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
import Spinner from "../spinner";
import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    // 1. receive data
    const { bookstoreService } = this.props;
    bookstoreService.getBooks()
      .then((data)=>{
      this.props.booksLoaded(data)
    });

    // 2. dispacth action to store
    ;
  }

  render() {
    const { books, loading } = this.props;
    if (loading)return <Spinner/>
    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book}/></li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
