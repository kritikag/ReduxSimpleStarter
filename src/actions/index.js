export function selectBook(book){
    // select book is an action creator, needs to return the type property
    return {
        type: 'BOOK_SELECTED',
        payload: book // more info about the action
    }
}