import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    };

    useEffect(() => {
        document.title = `${capitalize(props.category)}-NewMonkey`;
        
        const fetchData = async () => {
            try {
                props.setProgress(30);
                setLoading(true);
                let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
                let data = await fetch(url);
                props.setProgress(70);
                let parsedData = await data.json();
                setArticles(prevArticles => [...prevArticles, ...parsedData.articles]);
                setLoading(false);
                setTotalResults(parsedData.totalResults);
                props.setProgress(100);
            } catch (error) {
                console.error("Failed to fetch data:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, [props.country, props.category, props.apikey, props.pageSize, page]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <>
            <div className="heading">
                <h2 className='text-center' style={{marginTop:"85px"}}>News-Monkey APP - {capitalize(props.category === 'general' ? "headline" : props.category)}</h2>
                {loading && <Spinner />}
            </div>

            <InfiniteScroll
                dataLength={articles?.length || 0}
                next={loadMore}
                hasMore={articles?.length < totalResults}
                loader={<Spinner />}
            >
                <div className="container my-3">
                    <div className="row p-3">
                        {articles?.map((ele, index) => {
                            const uniqueKey = `${ele.url}-${index}`;
                            if (!ele.title) {
                                return null; // or render a fallback component
                            }
                            return <div className="col-md-4 p-4" key={uniqueKey}>
                                <NewsItem title={ele.title ? ele.title.slice(0, 30) : ""} description={ele.description ? ele.description.slice(0, 70) : ""} newUrl={ele.url} imgurl={ele.urlToImage} newsurl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
};

export default News;
