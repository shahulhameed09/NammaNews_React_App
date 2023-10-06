import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Loading from './loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const capitalFirstLetter = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }


    // document.title = `NammaNews | ${capitalFirstLetter(props.category)}`
    const [state, setState] = useState({
        articles: [],
        loading: true,
        page: 1,
        totalResults: 0
    });

    const updateNews = async () => {
        props.setProgress(50)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        props.setProgress(100)
    }

    useEffect(() => {
        document.title = `NammaNews | ${capitalFirstLetter(props.category)}`
        updateNews();
        //eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        setTimeout(async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page + 1}&pageSize=${props.pageSize}`;
            setState({ page: state.page + 1 });
            let data = await fetch(url);
            let parsedData = await data.json();

            setState({
                articles: state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults
            })
        }, 800);
    };

    return (
        <>
            <h2 className='text-center my-4'>NammaNews - Top {capitalFirstLetter(props.category)} Headlines</h2>
            <hr />
            {/* {state.loading && <Loading />} */}
            <InfiniteScroll
                dataLength={state.articles.length}
                next={fetchMoreData}
                hasMore={state.articles.length !== state.totalResults}
                loader={<Loading />}
            >
                <div className="container my-4">
                    <div className='row'>
                        {state.articles.map((i) =>
                            <div className="col-md-4 my-3" key={i.url}>
                                <NewsItem title={i.title && i.title.slice(0, 44)} desc={i.description && i.description.slice(0, 88)}
                                    imageUrl={i.urlToImage} newsUrl={i.url} date={i.publishedAt} author={i.author} source={i.source.name} />
                            </div>
                        )}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}
News.defaultProps = {
    country: "in",
    category: "general",
    pageSize: 8
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
}

export default News;
