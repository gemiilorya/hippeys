const sharedHead = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Rokkitt:wght@400;700&family=Unna:wght@400&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="tailwind.css">

    <link rel="icon" href="/assets/favicon.ico">
`;

document.head.insertAdjacentHTML("beforeend", sharedHead);