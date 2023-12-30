import { socialLinks } from '../data';
import SocialLink from './SocialLink';

function SocialLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return <SocialLink {...link} key={link.id} itemClass={itemClass} />;
      })}
    </ul>
  );
}
export default SocialLinks;
