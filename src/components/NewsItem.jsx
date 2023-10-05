import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const NewsItem = (props) =>{
        let { title, desc, imageUrl, newsUrl, date, author, source } = props
        return (
            <Card>
                <div style={{
                    display : 'flex',
                    justifyContent : 'flex-end',
                    position : 'absolute',
                    right : -4,
                    top :-6
                }}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <Card.Img variant="top" src={imageUrl ? imageUrl : "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"} height={195} width={300} />
                <Card.Body>
                    <h6>{title}...</h6>
                    <p>{desc}...</p>
                    <p style={{ fontSize: "13px" }} className='mb-2'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</p>
                    <Button href={newsUrl} target='_blank' variant="dark btn-sm">Read More</Button>
                </Card.Body>
            </Card>
        )
}
export default NewsItem;