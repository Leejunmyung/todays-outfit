import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface TranslateProps {
  text: string | undefined;
}

const Translate = ({ text }: TranslateProps) => {
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    const doTranslation = async () => {
      try {
        const { data } = await axios.post(
          'https://openapi.naver.com/v1/papago/n2mt',
          // https://thingproxy.freeboard.io/fetch/

          {
            source: 'en',
            target: 'ko',
            text: text,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID,
              'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_CLIENT_SECRET,
            },
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
