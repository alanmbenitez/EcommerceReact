import React from 'react'
import { Link } from 'react-router-dom'
import {Body,DirectoryItemContainer,BackgroundImage} from './category.styles.jsx'

const Category = ({category}) => {
    const { title, subtitle, imageUrl } = category

/*     const navigate = useNavigate()

    const onNavigateHandler = () => navigate(`shop/${title}`) */
    return (
        <DirectoryItemContainer to={`shop/${title}`} >
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default Category