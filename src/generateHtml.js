function generateHtml(employeeList) {
    let html = `
    <!DOCTYPE html>
    <html lang="en-US">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Employee Profiles</title>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                crossorigin="anonymous"
            />
        </head>
    
        <body>
            <nav class="navbar bg-danger">
                <a class="navbar-brand text-light p-3" href="/">
                    Employee Profiles
                </a>
            </nav>
            <div class="container d-flex justify-content-around flex-wrap py-5">
                ${employeeCard(employeeList)}
            </div>
        </body>
    </html>
    `;

    function employeeCard(employeeList) {
        let cards = ``;
        employeeList.map((employee) => {
            let empCard = `
            <div class="col-4 p-2">
            <div class="card text-center border border-primary" style="height: 300px; width: 380px">
                <div class="card-header bg-info">
                    <h3 class="text-light">${employee.name}</h3>
                    <h5>${employee.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${employee.id}</li>
                    <li class="list-group-item">Email: <a href="${employee.email}">${employee.email}</a></li>`;
            if (employee.getRole() == "Manager") {
                empCard += `<li class="list-group-item">Office number: ${employee.officeNumber}</li></ul></div></div>`;
                cards += empCard;
                return cards;
            } else if (employee.getRole() == "Engineer") {
                empCard += `<li class="list-group-item">Github: <a href="https://github.com/${employee.github}">${employee.github}</a></li></ul></div></div>`;
                cards += empCard;
                return cards;
            } else {
                empCard += `<li class="list-group-item">School: ${employee.school}</li></ul></div></div>`;
                cards += empCard;
                return cards;
            }
        });
        return cards;
    }
    return html;
}

module.exports = generateHtml;
