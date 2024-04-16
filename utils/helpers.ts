import { format } from 'date-fns';

export const postData = async (url = '', data = {}) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (e) {
    console.log('error', e);
    return e;
  }
};

export const formatShortDateTimeFromSeconds = (
  seconds: string | undefined
): string | undefined => {
  if (!seconds) {
    return;
  }

  return format(new Date(Number(seconds) * 1000), 'MMMM do');
};

export const addParsedContent = (
  content: string
): { missionStatement: string; projectDetails: string } | undefined => {
  try {
    const obj = JSON.parse(content);
    return obj;
  } catch (e) {
    console.log('err', e);
    return;
  }
};
