import React, { PropTypes } from 'react'

import Band from './band'

class BandList extends React.Component {
  render () {
    let bandList = this.props.bandList.map( band  => {
      return(<Band key={band.id} band={band}/>)
      }
    )

    return(
    <section className="band-list">
      <p>band list</p>
      {bandList}
    </section>
    )
  }
}

export default BandList;
