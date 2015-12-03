import React, { PropTypes } from 'react'

class Band extends React.Component {
  render () {
    console.log(this.props.band)

    let name = this.props.band.name
    let genre = this.props.band.genres[0]

    return(
      <section className="band">
        <h1>{name}</h1>
        <p>{genre}</p>
      </section>
    )
  }
}

export default Band;
