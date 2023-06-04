import './globals.css';

export const metadata = {
  title: 'Book Store',
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400&f[]=panchang@400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;