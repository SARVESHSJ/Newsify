import React from 'react'

const NewsItem=(props)=>{
  
  
    let{title,des,url,newsurl,author,date}=props;
    return (
      <div className="my-3">
    <div className="card">
  <img src={url===null?"":url} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5  className="card-title">{title}...</h5>
    <p className="card-text">{des}...</p>
    <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
