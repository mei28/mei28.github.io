import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faChrome,
  faRust,
  faAppStoreIos,
  faAndroid,
} from '@fortawesome/free-brands-svg-icons';
import { Globe, FileText, Bookmark, Package } from 'lucide-react';

export const getProjectLinkIcon = (label: string, size = 16): React.ReactNode => {
  switch (label.toLowerCase()) {
    case 'github':
      return <FontAwesomeIcon icon={faGithub} />;
    case 'web store':
    case 'chrome web store':
      return <FontAwesomeIcon icon={faChrome} />;
    case 'crates.io':
      return <FontAwesomeIcon icon={faRust} />;
    case 'ios':
    case 'app store':
      return <FontAwesomeIcon icon={faAppStoreIos} />;
    case 'android':
    case 'play store':
      return <FontAwesomeIcon icon={faAndroid} />;
    case 'web':
    case 'hp':
    case 'demo':
      return <Globe size={size} />;
    case 'docs':
    case 'paper':
      return <FileText size={size} />;
    case 'npm':
      return <Package size={size} />;
    default:
      return <Bookmark size={size} />;
  }
};
