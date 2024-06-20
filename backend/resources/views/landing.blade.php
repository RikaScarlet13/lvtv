<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/courses">COURSES</a>
                    <ul>
                        <li><a href="/courses/bab">BAB</a></li>
                        <li><a href="/courses/bsis-act">BSIS/ACT</a></li>
                        <li><a href="/courses/bsa-bsais">BSA/BSAIS</a></li>
                        <li><a href="/courses/bssw">BSSW</a></li>
                    </ul>
                </li>
                <li><a href="/our-story">OUR STORY</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Welcome to Our Website</h1>
        <!-- Content for the landing page -->
    </main>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
