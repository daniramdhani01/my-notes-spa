import React from 'react'
import useInput from '../hooks/useInput';
import { useLocale } from '../contexts/LocaleContext';
import { home } from '../utils/content';
function AddNew(){
    const { locale } = useLocale()
    const [title, onTitleChange] = useInput('');
    const [body, onBodyChange] = useInput('');
    return (
        <section className="add-new-page">
            <div className="add-new-page__input">
                <input className="add-new-page__input__title" placeholder={home[locale].secretNote} name='title' value={title} onChange={onTitleChange} maxLength={50}/>
                <textarea className="add-new-page__input__body" placeholder={home[locale].actuallyIam} name='body' value={body} onChange={onBodyChange}/>
                </div>
            <div className="add-new-page__action">
                <button className="action" type="button" title="Simpan">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default AddNew