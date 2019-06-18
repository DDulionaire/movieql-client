import gql from "graphql-tag";

export const HOME_PAGE = gql`
    query{
        movies(rating:8.5, limit:10){
            title
            id
            rating
            medium_cover_image
        }
    }
`