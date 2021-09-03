import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

type Props = {
  className;
};

const Avatar = ({ className }: Props) => {
  return (
    <div className={className}>
      <div style={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <StaticImage
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 32%',
            borderRadius: '100%',
            width: '100vh',
            height: '100vh',
            maxWidth: '150px',
            maxHeight: '150px',
            paddingBottom: 0
          }}
          src="../images/avatar.png"
          alt="Avatar"
          layout="fixed"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}

export default Avatar;
