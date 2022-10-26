import md5 from 'crypto-js/md5';

const convertEmailToHash = (email) => md5(email).toString();

const getGravatarURL = (email) => `https://www.gravatar.com/avatar/${convertEmailToHash(email)}`;

export default getGravatarURL;
