import React, { Component } from 'react'
import { withNavigation } from '../components/withNavigation'
import { addNote } from '../utils/local-data'
import PropTypes from 'prop-types';
class AddNew extends Component {
    constructor(props){
        super(props)

        this.state = {
            notes: {
                title: '',
                body: '',
            }
        }
    }

    handleChange = (e)=>{
        const {value, name} = e.target
        const notes = this.state.notes
        this.setState({notes: {
            ...notes,
            [name]: value
        }})
    }

    handleSubmit = ()=>{
        const notes = this.state.notes
        if(!notes.title || !notes.body) return
        addNote(notes)
        this.props.navigate("/")
    }
  render() {
    const notes = this.state.notes
    return (
      <section className="add-new-page">
            <div className="add-new-page__input">
                <input className="add-new-page__input__title" placeholder="Catatan rahasia" name='title' value={notes.title} onChange={this.handleChange} maxLength={50}/>
                <textarea className="add-new-page__input__body" placeholder="Sebenarnya saya adalah ...." name='body' value={notes.body} onChange={this.handleChange}/>
                </div>
            <div className="add-new-page__action">
                <button className="action" type="button" title="Simpan" onClick={this.handleSubmit}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                    </svg>
                </button>
            </div>
        </section>
    )
  }
}

AddNew.propTypes = {
    navigate: PropTypes.func,
}

export default withNavigation(AddNew)