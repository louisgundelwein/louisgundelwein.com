import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import AdSense from '@/components/ads';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Louis Gundelwein',
	description: 'Personal Website of Louis Gundelwein',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	console.log('GOOGLE_ADS_PUBLISHER_ID', process.env.GOOGLE_ADS_PUBLISHER_ID);
	return (
		<html lang="en">
			<head>
				<meta name="google-adsense-account" content="ca-pub-6105108199502947"></meta>
				{process.env.GOOGLE_ADS_PUBLISHER_ID && (
					<AdSense publisherId={process.env.GOOGLE_ADS_PUBLISHER_ID} />
				)}
			</head>
			<body className={inter.className}>{children}</body>
			<Analytics />
		</html>
	);
}
