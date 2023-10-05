import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

    static defaultProps = {
        country: "in",
        category: "general",
        pageSize: 8
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number,
    }

    capitalFirstLetter(word) {
        return word[0].toUpperCase() + word.slice(1);
    }

    constructor(props) {
        super(props);
        document.title = `NammaNews | ${this.capitalFirstLetter(this.props.category)}`
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    async updateNews() {
            this.props.setProgress(50)
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
            this.props.setProgress(100)
    }

    async componentDidMount() {
        this.setState({ page: this.state.page })
        this.updateNews()
    }

    // nextPage = async () => {
    //     this.setState({ page: this.state.page + 1 })
    //     this.updateNews()
    // }

    // previousPage = async () => {
    //     this.setState({ page: this.state.page - 1 })
    //     this.updateNews()
    // }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        setTimeout(async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            
            this.setState({ articles: this.state.articles.concat(parsedData.articles), 
                totalResults: parsedData.totalResults
            })
        }, 800);
    };

    render() {
        return (
            <>
                <h2 className='text-center my-4'>NammaNews - Top {this.capitalFirstLetter(this.props.category)} Headlines</h2>
                <hr />
                {/* {this.state.loading && <Loading />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loading />}   
                    >
                <div className="container my-4">
                    <div className='row'>
                        {this.state.articles.map((i) =>
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
}
