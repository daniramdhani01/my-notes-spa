import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { showFormattedDate } from '../utils'

export default class NotesCard extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const {item} = this.props
    return (
        <article className="note-item">
            <h3 className="note-item__title"><Link to={"/notes/"+item.id}>{item.title}</Link></h3>
            <p className="note-item__createdAt">{showFormattedDate(item.createdAt)}</p>
            <p className="note-item__body">{item.body}</p>
        </article>
    )
  }
}
