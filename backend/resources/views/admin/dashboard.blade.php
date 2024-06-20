<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
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
                <li><a href="/teleradio">TELERADIO</a></li>
                <li><a href="/archives">ARCHIVES</a></li>
                <li><a href="/profile">PROFILE</a></li>
                <li><a href="/logout">LOGOUT</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Dashboard</h1>
        <!-- Content for the dashboard -->
    </main>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
