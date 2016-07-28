//Create a new component and this component should produce html
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
const API_KEY = 'AIzaSyA_nq7U1XjmHzcycq4kMKewEhWwDFPGfEE'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'

class App extends Component{
    constructor(props){
        super(props)
        this.state={videos:[],
        selectedVideo:null}
        this.ytSearch('react')
    }
    ytSearch(term){

        YTSearch({key:API_KEY, term:term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            })
        })
    }

    render(){
        return (<div><SearchBar onSearchBarChange ={(term)=>this.ytSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList videos = {this.state.videos}
                       onVideoSelect={(selectedVideo)=>{console.log('Hello', selectedVideo)
                       this.setState({selectedVideo:selectedVideo})}}/>
        </div>)
    }


}

// After we create that component, we need to add it to the dom.
// Take this component's generated HTML and put it on the page(in the dom)
ReactDOM.render(<App/>, document.getElementById('container'))