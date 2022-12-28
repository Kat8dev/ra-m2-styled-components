import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { dimensions } from '../styles'

function useSize(titleSize) {
  const [size, setSize] = useState("")
  const { h1, h2, h3, h4, h5, h6 } = dimensions.font

  useEffect(() => {
    switch (titleSize) {
      case 'h1':
        setSize(h1)
        break
      case 'h2':
        setSize(h2)
        break
      case 'h3':
        setSize(h3)
        break
      case 'h4':
        setSize(h4)
        break
      case 'h5':
        setSize(h5)
        break
      case 'h6':
        setSize(h6)
        break
      default:
        setSize(h1)
    }
  }, [titleSize, h1, h2, h3, h4, h5, h6])

  return { size }
}

useSize.propTypes = {
  titleSize: PropTypes.string.isRequired,
}

export default useSize
