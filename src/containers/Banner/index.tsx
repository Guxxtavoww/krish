import React, { memo } from 'react';
import { motion } from 'framer-motion';

import { site_banner, site_mobile_banner } from '@/assets';
import { useMobile } from '@/contexts/Mobile';
import { MAIN_BG } from '@/styles/constants';

const Banner: React.FC = () => {
  const { isMobileDevice } = useMobile();

  return (
    <div
      style={{
        width: '100%',
        background: MAIN_BG,
        paddingBottom: '3.5rem',
        objectFit: 'contain',
      }}
    >
      <motion.img
        style={{
          width: '100%',
          objectFit: !isMobileDevice ? 'cover' : 'fill',
        }}
        src={isMobileDevice ? site_mobile_banner : site_banner}
        whileInView={{ opacity: [0, 1], scale: [0.85, 1] }}
        className="banner_img"
        alt="banner"
        loading="lazy"
      />
    </div>
  );
};

export default memo(Banner);
