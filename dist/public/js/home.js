!async function() {
    const { pathname: n } = location;

    // Redirect if the pathname ends with .html or .html/
    if (n.endsWith(".html") || n.endsWith(".html/")) {
        location.replace("/");
    }

    const a = document.getElementById("root");
    a.innerHTML = '<h1 style="text-align: center; padding: 2rem 1rem;">Loading...</h1>';

    // Determine the API URL based on the pathname
    const s = "/" === n ? "/view-data" : `${n}/view-data`;

    try {
        // Fetch data from the API
        const e = await fetch(s);
        const { data: i } = await e.json();

        // If the request is successful, display the content
        if (e.ok) {
            a.innerHTML = `
                <div class="container">
                    <h2>ANIME API</h2>
                    <h4>Api simple mudah di pakai, dan tentunya suppot di berbagai project</h4>
                    <h4>
                        Domian website api bisa berubah kapan saja, pantai terus websitenya!<h4>
                        <span class="value">"Website ini di kembangkan dengan vercel"</span>
                    </h4>
                    <h4>
                        API gratis 100%
                    </h4>
                    <div class="card-wrapper">
                        <h3>Sources :</h3>
                        ${i.sources.map(n => `
                            <div class="card">
                                <h4>${n.title}</h4>
                                <p>
                                    <span class="key">Get</span> :
                                    <a href="${n.route}">${n.route}</a>
                                </p>
                            </div>
                        `).join("")}
                    </div>
                </div>
            `;
        } else {
            // If the request fails, show the error status
            a.innerHTML = `<h1 style="text-align: center; padding: 2rem 1rem;">${e.status} ${e.statusText}</h1>`;
        }
    } catch (error) {
        // Handle any errors in the fetch request
        a.innerHTML = `<h1 style="text-align: center; padding: 2rem 1rem;">Error: ${error.message}</h1>`;
    }
}();
