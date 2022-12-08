import React from 'react';

export function NotFound() {
  const styles = {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover"
  };
  return (
    <div>
      <img style={styles}
        src="https://cdn.dribbble.com/users/644529/screenshots/2662296/404.gif"
        alt=" 404 ERROR-Page not found" />
    </div>
  );
}
