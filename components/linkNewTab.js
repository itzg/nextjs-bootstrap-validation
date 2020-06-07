import {FaExternalLinkAlt} from 'react-icons/fa'
import styles from './linkNewTab.module.css'

export default function LinkNewTab({href, children}) {
  return (
      <a href={href} target="_blank">{children}
        <FaExternalLinkAlt className={styles.externalIcon}/>
      </a>
  );
}
