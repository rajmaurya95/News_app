import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {
    static defaultProps = {
        pageSize: 6,
        country: "in",
        apiKey: "b950364e10c9412f98a1f8ade2905218",
        topic: "top-headlines",
        category: "general",
    }
    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        apiKey: PropTypes.string,
        topic: PropTypes.string,
        category: PropTypes.string,

    }
    constructor() {
        super();
        console.log("Hello I am a constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalArticles: 38
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/${this.props.topic}?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalArticles: data.totalResults,
            loading: false
        });
    }
    handlNextClick = async () => {
        console.log("hii i am next click")

        if (!(this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize))) {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parseData = await data.json();
            console.log(parseData);
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loading: false
            })
        }
    }
    handlPreviousClick = async () => {
        console.log("Hiii i am previous click")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            laoding: false
        })
    }


    render() {
        return (
            <div className='container'>
                <h2 className='text-center my-4 text-uppercase fw-bolder fs-3 '>NewsMore - Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row row row-cols-xs-1 row-cols-md-2 row-cols-lg-3 ">
                    {!this.state.loading && this.state.articles.map((element) => {
                        console.log(element);
                        return <div key={element.url} className="col col-lg-4  col-xs-12 ">
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage ? element.urlToImage : "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"} newsURL={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlPreviousClick} className="btn btn-secondary bg-dark">&larr;
                        Previous</button>
                    <button disabled={this.state.page > Math.ceil(38 / this.props.pageSize)} type="button" onClick={this.handlNextClick} className="btn btn-secondary bg-dark">Next &rarr;
                    </button>
                </div>
            </div>
        )
    }
}

export default News;
