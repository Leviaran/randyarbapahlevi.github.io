import React from 'react'
import Link from 'gatsby-link'

import { rhythm} from '../utils/typography'

import * as fontAwesome from 'react-icons/lib/fa/'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {header}
          {children()}
        </div>

        <footer style={{ width: "100%", backgroundColor: 'black', bottom: 0 }}>
          <div style={{ alignContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: 0 }}>
            <p style={{
              marginBottom: 0, color: 'white', padding: '10px 0px 10px',
              textAlign: 'center', position: 'static', fontSize: '13px', fontFamily: 'Montserrat, sans-serif'
            }}>
              Made with &nbsp;<fontAwesome.FaHeart size='13px' color='red' />&nbsp; and coffee
              &nbsp;<fontAwesome.FaCircle size='5px' color='white' />&nbsp; Powered by Gatsby
            </p>
          </div>
        </footer>

      </div>

    )
  }
}

export default Template
