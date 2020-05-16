import CCFC from '../../Asset/ccfc-logo.png';
import ID from '../../Constant/ID';

const { LOGO } = ID;

const logoConfiguration = {
  logoHeader: {
    id: LOGO.HEADER_ID,
    textAlign: 'center',
  },

  logoImage: {
    id: LOGO.IMAGE_ID,
    style: { fontSize: 100 },
    src: CCFC,
    size: 'massive',
  },
};

export default logoConfiguration;
