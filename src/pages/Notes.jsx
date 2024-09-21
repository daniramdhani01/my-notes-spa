import React, { useEffect, useMemo, useState } from 'react'
import NotesCard from '../components/NotesCard'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { useLocale } from '../contexts/LocaleContext';
import { home } from '../utils/content';
import { getActiveNotes, getArchivedNotes } from '../utils/network-data';
import Spinner from "../assets/icons/spinner.svg?react"
import Plus from "../assets/icons/Plus.svg?react"

function Notes(){
  const { pathname } = useLocation()
  const { locale } = useLocale()
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true)
  const [dataNotes, setDataNotes] = useState([{
    archived: false,
    body: "",
    createdAt: "",
    id: "",
    owner: "",
    title: ""
  }])
  
  const handleSearch = (e)=>{
    const value = e.target.value
    if(value.length > 50) return
    setSearchParams({keyword: value})
  }

  const notesList = useMemo(()=>{
    return dataNotes.filter( item => item.title.includes(searchParams.get("keyword")||""))
  },[dataNotes,searchParams.get("keyword")])

  const handleGetNotes = async()=>{
    setLoading(true)
    const {data} = pathname === "/" ? await getActiveNotes() : await getArchivedNotes()
    if(data) setDataNotes(data)
    setLoading(false)
  }

  useEffect(()=>{
    handleGetNotes()
  },[])

  return (
    <section className='homepage'>
      <h2>{pathname === "/" ? home[locale].activeNotes : home[locale].archivedNote}</h2>
      <section className="search-bar">
        <input placeholder={home[locale].searchPlaceholder} value={searchParams.get("keyword") || ""} onChange={handleSearch} maxLength={50}/>
      </section>
      {
      loading ? 
        <div style={{textAlign: "center", paddingTop:"10vh"}}><Spinner/></div> 
      :
      notesList.length > 0 ?
        <section className="notes-list">
          {notesList.map(item =><NotesCard item={item} key={item.id}/>)}
        </section>
      :
        <section className="notes-list-empty">
          <p className="notes-list__empty">{home[locale].noNotes}</p>
        </section>
      }
      {pathname === "/" ? // active notes
        <div className="homepage__action">
          <Link to={"/notes/new"}>
          <button className="action" type="button" title="Tambah">
              <Plus/>
            </button>
            </Link>
          </div>
      : <></>}
    </section>
  )
}

export default Notes