import './globals.css'
export default function RootLayout({
    //Layouts moust accept a children prop
    //This will be populated with nested layouts or pages
    children,
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}