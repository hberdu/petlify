import React from 'react'

import * as S from './styled'

const PostItem = () => (
    <S.PostItemLink to="/slug/">
        <S.PostItemWrapper>
            <S.PostItemTag background="#47650b">PetMatch</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>05 de Janeiro de 2021</S.PostItemDate>
                    <S.PostItemTitle>
                        Não compre, Adote!
                    </S.PostItemTitle>  
                    <S.PostItemDescription>
                        Algumas razões para você adotar ao invés de comprar seu estimado pet.
                    </S.PostItemDescription>              
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

export default PostItem