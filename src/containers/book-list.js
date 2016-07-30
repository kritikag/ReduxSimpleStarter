import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'
class BookList extends Component {
    renderList(){
       return this.props.books.map((book)=>{
            return <li key={book.title}
                       onClick={this.props.selectBook.bind(this, book)}>
                       {book.title}</li>
        })
    }
    render (){
        return (
            <ul className="list-group col-sm-4">{this.renderList()}</ul>
        )
    }
}
//Anything returned will end as props
function mapDispatchToProps(dispatch) {
    //Whenever select book is called, the result is flowing through all reducers
    return bindActionCreators({selectBook:selectBook}, dispatch)
}

function mapStateToProps(state){
    return {
        books:state.books
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)