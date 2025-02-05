import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component"

const News=(props)=>{
const[articles,setArticles]=useState([]);
const[loading,setLoading]=useState(false);
const[page,setpage]=useState(1);
const[totalresults,setResults]=useState(0);


 
  const updateNews=async()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e10adb111d07445dbe793cbc2d5962c1&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)                                                                                                   
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    setArticles(page===1?parseddata.articles:articles.concat(parseddata.articles))
    setLoading(false)
    setResults(parseddata.totalResults)
    
  }

  // handlenextclick = async () => {
  //   await this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };
  // handleprevclick = async () => {
  //   await this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };
  const capitalfirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = `${capitalfirstletter(props.category)} News`;
  const fetchMoreData = async() => {
    await setpage(page+1)
    //updateNews();
   
  };
useEffect(()=>
{
  updateNews();
},[page]);
//here updatenews is called when component is rendered for the first time and whenever page state is changed,so updatenews() is effect and page is change
  
    return (
      <div className="container my-5">
        <h1 className="text-center" style={{marginTop:'80px'}}>
          Top HeadLines from {capitalfirstletter(props.category)}
        </h1>
        {/* {this.state.loading && <Loading/>} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length<totalresults}
          loader={loading && <Loading />}
        >
          <div className="container">
          <div className="row">
            {
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={
                        element.title != "" ? element.title.slice(0, 44) : ""
                      }
                      des={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      url={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
          </div>
          </div>
        </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleprevclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalresults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handlenextclick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
      
    );
  
}

export default News;
