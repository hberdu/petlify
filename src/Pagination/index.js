import React from 'react'
import {Link} from 'gatsby'

import * as S from './styled'


const Pagination = ({
    isFirst,
    isLast,
    currentPage,
    numPages,
    prevPages,
    nextPages
}) => (
    <S.PaginationWrapper> {
        !isFirst && <Link to={prevPage}>← página anterior</Link>
    }
        <p>{currentPage}
            de {numPages}</p>
        {
        !isLast && <Link to={nextPage}>→ proxima página</Link>
    } </S.PaginationWrapper>
)
