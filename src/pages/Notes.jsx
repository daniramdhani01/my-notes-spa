import React, { Component } from 'react'
import NotesCard from '../components/NotesCard'
import { getActiveNotes, getArchivedNotes } from '../utils/local-data'
import { Link } from 'react-router-dom'

export default class Notes extends Component {
    constructor(props){
        super(props)
        this.state = {
          notesList: []
        }
    }

    handleSearch = (e)=>{
      const value = e.target.value
      if(value.length > 50) return
      this.props.setSearchParams(value)
    }

    getData = ()=>{
      if(this.props.statusCatatan === "Aktif"){
        this.setState({notesList: getActiveNotes()})
      }else{
        this.setState({notesList: getArchivedNotes()})
      }
    }

    componentDidMount(){
      this.getData()
    }

    componentDidUpdate(prev){
      if(prev.statusCatatan !== this.props.statusCatatan){
        this.getData()
      }
    }

  render() {
    const {statusCatatan, searchParams} = this.props

    return (
      <div>
        <h2>Catatan {statusCatatan}</h2>
        <section className="search-bar">
          <input placeholder="Cari berdasarkan judul ..." value={searchParams}  onChange={this.handleSearch}/>
        </section>
        <section className="notes-list">
          {this.state.notesList.filter(item => item.title.toLocaleLowerCase().includes(searchParams)).map(item =><NotesCard item={item} key={item.id}/>)}
        </section>
        {this.props.statusCatatan === "Aktif" ?
          <section className="homepage__action">
            <Link to={"/notes/new"}>
            <button className="action" type="button" title="Tambah">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
              </button>
              </Link>
            </section>
        : <></>}
      </div>
    )
  }
}
