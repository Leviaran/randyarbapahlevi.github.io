import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Randy Arba`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(4),
            height: rhythm(4),
          }}
        />
        <p style={{marginTop: 10}}>          
          Written by <strong>Randy Arba</strong> who lives, study, <br/> and works in Yogyakarta building useful things.{' '}
          <a href="https://twitter.com/RandyArba">
            <br/>You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
