import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsURL } = this.props;
        return (
            <div className="card ">
                <img className="card-img-top" height={"230px"} src={imageurl} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsURL} className="btn btn-dark text-center">Read More...</a>
                </div>
            </div>
        )
    }
}
export default NewsItem;
