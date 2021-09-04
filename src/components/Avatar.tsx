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
        width: '100%',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <StaticImage
          style={{
            paddingTop: '100%',
            height: 0,
            borderRadius: '100%',
            paddingBottom: 0,
          }}
          src="../images/avatar.png"
          alt="Avatar"
          layout="fixed"
          objectFit="contain"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

export default Avatar;
