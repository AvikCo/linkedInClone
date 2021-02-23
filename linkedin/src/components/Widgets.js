import React from 'react'
import '../styles/Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) =>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Elon Musk just created account in LinkedIn", "Top news - 9,099 readers")}
            {newsArticle("Facebook released react 17.0", "Top news - 987 readers")}
            {newsArticle("Bill gates warned on climate change", "Top news - 5,233 readers")}
            {newsArticle("Corona virus situation getting normalized in india", "Top news - 10,099 readers")}
        </div>
    )
}

export default Widgets
