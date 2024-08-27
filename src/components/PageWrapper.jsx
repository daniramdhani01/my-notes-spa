import React, { cloneElement } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import PropTypes from 'prop-types';

function PageWrapper({children}) {
    const {pathname} = useLocation()
    const {id} = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const statusCatatan = pathname.includes("archives") ? "Arsip" : "Aktif"

    return <>{cloneElement(children, {
        id,
        statusCatatan,
        searchParams: searchParams.get('keywords')?.toLocaleLowerCase() || '',
        setSearchParams: (val) => setSearchParams({keywords: val})
    })}</>
}

PageWrapper.propTypes = {
    children: PropTypes.element.isRequired
}

export default PageWrapper