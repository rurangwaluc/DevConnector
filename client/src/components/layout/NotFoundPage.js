import React, { Fragment} from 'react'

const NotFoundPage = () => {
  return (
    <Fragment>
      <h1 className="x-large text-primary">
          <i className="fas fa-exclamtion-tringle"></i> Page Not Found
      </h1>
      <p className="large">Sorry, This page does not exist</p>
    </Fragment>
  )
}

export default NotFoundPage
