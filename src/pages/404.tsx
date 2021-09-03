import * as React from 'react';
import { Link } from 'gatsby';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './404.scss';

// markup
const NotFoundPage = () => {
  return (
    <main className="not-fount-page">
      <title>Not found</title>
      <h1>Page not found</h1>
      <Link to="/">Go home <FontAwesomeIcon style={{ paddingLeft: 5 }} icon={faExternalLinkAlt} size="sm" /></Link>
    </main>
  )
}

export default NotFoundPage
