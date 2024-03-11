import React from 'react'

const NewsItem = (props) => {
  let { title, description, imgurl, newsurl, author, date, source } =props;
  return (
    <div className="card" style={{ width: "20 rem", height: "30rem", border: "1px solid" }}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
        <span className="visually-hidden">{source}</span>
      </span>
      <img src={!imgurl ? "https://dims.apnews.com/dims4/default/979c247/2147483647/strip/true/crop/2766x1556+0+144/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F76%2F4f%2F0a110325a5f79ac4c2a8cf2002ba%2F282b3ccbe66a429eb37dafbafc209dbf" : imgurl} style={{ height: "15rem" }} className="rounded float-start" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-body">By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
        <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary  ">Read More</a>
      </div>
    </div>
  )
}
export default NewsItem
