import React from 'react'
import useInput from '../hooks/useInput';
import { useLocale } from '../contexts/LocaleContext';
import { home } from '../utils/content';
import Checklist from '../assets/icons/checklist.svg?react';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';

function AddNew(){
    const { locale } = useLocale()
    const navigate = useNavigate()
    const [title, onTitleChange] = useInput('');
    const [body, onBodyChange] = useInput('');

    const handleSave = async ()=>{
        await addNote({title, body})
        navigate("/")
    }
    return (
        <section className="add-new-page">
            <div className="add-new-page__input">
                <input className="add-new-page__input__title" placeholder={home[locale].secretNote} name='title' value={title} onChange={onTitleChange} maxLength={50}/>
                <textarea className="add-new-page__input__body" placeholder={home[locale].actuallyIam} name='body' value={body} onChange={onBodyChange}/>
                </div>
            <div className="add-new-page__action">
                <button className="action" type="button" title="Simpan" onClick={handleSave}>
                    <Checklist />
                </button>
            </div>
        </section>
    )
}

export default AddNew