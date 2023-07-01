export const isServerSide = () => typeof window === 'undefined';
export const isClientSide = () => !isServerSide();

export const isDev = () => process.env.NODE_ENV === 'development';

export const isProd = () => process.env.NODE_ENV === 'production';
