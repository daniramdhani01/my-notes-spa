import React, { useEffect, useState } from 'react'
import { showFormattedDate } from '../utils'
import NotFound from './NotFound'
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/network-data';
import Spinner from "../assets/icons/spinner.svg?react"
import Archive from "../assets/icons/archive.svg?react"
import Active from "../assets/icons/active.svg?react"
import Trash from "../assets/icons/trash.svg?react"

function DetailNotes (){
    const navigate = useNavigate()
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [notes, setNotes] = useState({
        archived: false,
        body: "",
        createdAt: "",
        id: "",
        owner: "",
        title: ""
    })

    const handleDelete = ()=>{
        deleteNote(id).then(()=>navigate("/"))
    }

    const handleStatus = ()=>{
        if(notes.archived) return unarchiveNote(id).then(()=>navigate("/"))
        archiveNote(id).then(()=>navigate("/"))
    }

    const handleGetNote = async()=>{
        setLoading(true)
        const {data} = await getNote(id)
        setNotes((prevState)=>{
            if(data) return data
            return {...prevState, id: false}
        })
        setLoading(false)
    }

    useEffect(()=>{
        handleGetNote()
    },[])

    if(notes.id === false) return <NotFound />
    if(loading) return <div style={{textAlign: "center", paddingTop:"10vh"}}><Spinner/></div>
    
    return (
        <section className='detail-page'>
            <h3 className="detail-page__title">{notes.title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(notes.createdAt)}</p>
            <div className="detail-page__body">{notes.body}</div>
            {true ? 
                <section className="detail-page__action">
                    <button className="action" type="button" onClick={handleStatus}>
                    {notes.archived ? <Active/> : <Archive/>}
                    </button>
                    <button className="action" type="button" title="Hapus" onClick={handleDelete}>
                        <Trash/>
                    </button>
                </section>
            :<></>}
        </section>
    )
}

DetailNotes.propTypes = {
    id: PropTypes.string,
    navigate: PropTypes.func,
}

export default DetailNotes