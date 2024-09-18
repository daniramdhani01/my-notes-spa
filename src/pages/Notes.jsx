import React from 'react'
import NotesCard from '../components/NotesCard'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useLocale } from '../contexts/LocaleContext';
import { home } from '../utils/content';

function Notes(props){
  const { locale } = useLocale()
    const {statusCatatan, searchParams} = props
    const handleSearch = (e)=>{
      const value = e.target.value
      if(value.length > 50) return
    }
    const dataNotes = []

    return (
      <section className='homepage'>
        <h2>{home[locale].activeNotes} {statusCatatan}</h2>
        <section className="search-bar">
          <input placeholder={home[locale].searchPlaceholder} value={searchParams}  onChange={handleSearch}/>
        </section>
        {dataNotes.length > 0 ?
          <section className="notes-list">
              {dataNotes.map(item =><NotesCard item={item} key={item.id}/>)}
          </section>
        :
          <section className="notes-list-empty">
            <p className="notes-list__empty">{home[locale].noNotes}</p>
          </section>
        }
        {/* {props.statusCatatan === "Aktif" ? */}
          <div className="homepage__action">
            <Link to={"/notes/new"}>
            <button className="action" type="button" title="Tambah">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
              </button>
              </Link>
            </div>
        {/* : <></>} */}
      </section>
    )
  }

Notes.propTypes = {
  setSearchParams : PropTypes.func,
  searchParams : PropTypes.string,
  statusCatatan: PropTypes.oneOf(["Aktif","Arsip"])
}

export default Notes