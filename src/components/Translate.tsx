import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface TranslateProps {
  text: string | undefined;
}

const Translate = ({ text }: TranslateProps) => {
  const [translatedText, setTranslatedText] = useState('위치');

  useEffect(() => {
    const doTranslation = async () => {
      try {
        const { data } = await axios.post(
          'https://todays-outfit.vercel.app/api/translate',
          // https://openapi.naver.com/v1/papago/n2mt
          // https://thingproxy.freeboard.io/fetch/

          {
            text: text,
          },
        );

        setTranslatedText(data.message.result.translatedText);
      } catch (error) {
        console.error('Failed to translate text.', error);
      }
    };
    if (text) {
      doTranslation();
    }
  }, [text]);

  return <div>{translatedText}</div>;
};

export default Translate;
