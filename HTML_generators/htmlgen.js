function generateHTML(){

generateCards();

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

    ${employee_array}

    </div>

    <a href="#header"><button id="btn1">Go to top</button></a> 

    <script src="./classes.js"></script>
</body>
</html>
`;

console.log(html_template);

}

generateHTML();

module.exports = { generateCards, generateHTML };