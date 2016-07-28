import React, {Component} from 'react'
class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {term:''}
    }
    render () {
        return <input value={this.state.term} onChange={this.onInputChange.bind(this)}/>
    }
    onInputChange (event){
         console.log(this)
         this.setState({term:event.target.value})
         this.props.onSearchBarChange(event.target.value)
    }
}
export default SearchBar