import React, { useEffect } from 'react'
import { GoogleTranslateElement } from './styles'

export default function GoogleTraslate() {
  
  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        // pageLanguage: 'en',
        includedLanguages: 'en,es', // include this for selected languages
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: true,
      },
      'google_translate_element'
    );
  };
  
  return (<GoogleTranslateElement id="google_translate_element" />);
}
