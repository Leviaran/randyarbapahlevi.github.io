import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import * as fontAwesome from 'react-icons/lib/fa/'

class Bio extends React.Component {
  render() {

    const Social = props =>
      <a style={{
        boxShadow: 'none',
        textDecoration: 'none',
        color: 'inherit',
      }} href={props.href}>
      {props.children}
      </a>

    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1.0),
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
        <p style={{ marginTop: 10 }}>
          Written by <strong>Randy Arba</strong> who lives, study, <br /> and works in Yogyakarta building useful things.{' '}
          <br/>
          You should follow me on
          &nbsp;
          <Social href="https://web.facebook.com/randy.arba22">
            <fontAwesome.FaFacebookSquare size='25px' color='black' />
          </Social>
          &nbsp;

          <Social href="https://github.com/Leviaran">
            <fontAwesome.FaGithubSquare size='25px' color='black' />
          </Social>          
          &nbsp;

          <Social href="https://twitter.com/RandyArba">
            <fontAwesome.FaTwitterSquare size='25px' color='black' />
          </Social>
          &nbsp;

          <Social href="https://linkedin.com/in/leviaran">
            <fontAwesome.FaLinkedinSquare size='25px' color='black' />
          </Social>      
        </p>
      </div>
    )
  }
}

export default Bio
