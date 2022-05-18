const card_template = 
`
<div class="card">
    <img src="./images/avatar_1.jpg" alt="Avatar">
        <div class="container" id="cardtext">
            <h1>role: ${manager.name}</h1>
            <h1>Name: </h1>
            <h1>Employee ID: </h1>
            <h1>Email: </h1>
            <h1>Office number: </h1>
</div>
`

const html_template =

`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Your team profile</title>
</head>
<body>

    <header id="header">
        <h1>Here is your team profile</h1>
    </header>

    <div class="main1">

    ${card_template}

    <a href="#header"><button id="btn1">Go to top</button></a> 

    <script src="./classes.js"></script>
</body>
</html>
`;

module.export = html_template;