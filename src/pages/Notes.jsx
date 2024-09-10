import React, { useState } from 'react'
import NotesCard from '../components/NotesCard'
import { getActiveNotes, getArchivedNotes } from '../utils/local-data'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function Notes(props){
    const {statusCatatan, searchParams} = props
    const [notes, setNotes] = useState([])
    const handleSearch = (e)=>{
      const value = e.target.value
      if(value.length > 50) return
      // props.setSearchParams(value)
    }
    const dataNotes = []

    return (
      <div>
        <h2>Catatan {statusCatatan}</h2>
        <section className="search-bar">
          <input placeholder="Cari berdasarkan judul ..." value={searchParams}  onChange={handleSearch}/>
        </section>
        {dataNotes.length > 0 ?
          <section className="notes-list">
              {dataNotes.map(item =><NotesCard item={item} key={item.id}/>)}
          </section>
        :
          <section className="notes-list-empty">
            <p className="notes-list__empty">Tidak ada catatan</p>
          </section>
        }
        {props.statusCatatan === "Aktif" ?
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

Notes.propTypes = {
  setSearchParams : PropTypes.func,
  searchParams : PropTypes.string,
  statusCatatan: PropTypes.oneOf(["Aktif","Arsip"])
}

export default Notes