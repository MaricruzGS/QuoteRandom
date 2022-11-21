import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, getNewValue, backgroundColorObject, colorObject }) => {
    return (
        <article className='quoteBox' >
            <section className='quote'>
                <i className='bx bxs-quote-alt-left' style={colorObject}></i>
                <p className='quote__quote' style={colorObject}>{quote.quote}</p>
            </section>
            <h3 className='quote__author' style={colorObject}>{quote.author}</h3>
            <section className='button quote--button'>
                <QuoteButton getNewValue={getNewValue} backgroundColorObject={backgroundColorObject} />
            </section>
        </article>
    )
}

export default QuoteBox