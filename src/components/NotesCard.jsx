import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { showFormattedDate } from '../utils'
import PropTypes from 'prop-types';
class NotesCard extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const {item} = this.props
    return (
        <article className="note-item">
            <h3 className="note-item__title"><Link to={`/notes/${item.id}`}>{item.title}</Link></h3>
            <p className="note-item__createdAt">{showFormattedDate(item.createdAt)}</p>
            <p className="note-item__body">{item.body}</p>
        </article>
    )
  }
}

NotesCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
  })
}

export default NotesCard