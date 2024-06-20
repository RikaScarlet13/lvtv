import React from "react";
import AdminSidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";

const App: React.FC = () => {
  const page = {
    language: "en", // Replace with actual data if available
    getUrl: () => "https://example.com", // Replace with actual function if available
    description: "Page description", // Replace with actual data if available
    title: "Page title", // Replace with actual data if available
  };

  return (
    <html lang={page.language}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="always" />
        <link rel="canonical" href={page.getUrl()} />
        <meta name="description" content={page.description} />
        <title>{page.title}</title>
        <link rel="stylesheet" href="path/to/main.css" />
        <script src="path/to/main.js" defer></script>
      </head>
      <body className="flex h-screen bg-gray-200 font-roboto">
        {/* Sidebar Component */}

        <AdminSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header Component */}
          <Header />
          <header className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              {/* Body Content */}
              <div className="mx-auto px-6 py-8">
                {/* Your dynamic body content here */}
                <h1 className="text-3xl font-bold mb-4">Page Content</h1>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </header>
        </div>
      </body>
    </html>
  );
};

export default App;
