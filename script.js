//TO FETCH 
async function fetchAndDisplayUsers() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const userList = document.getElementById("user-list");

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();
    userList.innerHTML = '';

    users.forEach(user => {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `
        <h2>${user.name} (${user.username})</h2>
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        
        <h3>Address</h3>
        <ul>
          <li><strong>Street:</strong> ${user.address.street}</li>
          <li><strong>Suite:</strong> ${user.address.suite}</li>
          <li><strong>City:</strong> ${user.address.city}</li>
          <li><strong>Zipcode:</strong> ${user.address.zipcode}</li>
          <li><strong>Geo:</strong> Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</li>
        </ul>

        <h3>Company</h3>
        <ul>
          <li><strong>Name:</strong> ${user.company.name}</li>
          <li><strong>Catchphrase:</strong> "${user.company.catchPhrase}"</li>
          <li><strong>BS:</strong> ${user.company.bs}</li>
        </ul>
        <hr/>
      `;
      userList.appendChild(userDiv);
    });

  } catch (error) {
    userList.innerHTML = `<p style="color: red;">Failed to fetch users: ${error.message}</p>`;
  }
}

fetchAndDisplayUsers();




// TO FETCH POSTS

async function fetchAndDisplayPosts() {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const postList = document.getElementById("post-list");

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const posts = await response.json();
        postList.innerHTML = '';

        // Limit to first 10 posts
        posts.slice(0, 11).forEach(post => {
            const postDiv = document.createElement("div");
            postDiv.innerHTML = `
                <h2>${post.title}</h2>
                <p><strong>Author ID:</strong> ${post.userId}</p>
                <p><strong>ID:</strong> ${post.id}</p>
                <p>${post.body}</p>
                <hr/>
            `;
            postList.appendChild(postDiv);
        });

    } catch (error) {
        postList.innerHTML = `<p style="color: red;">Failed to fetch posts: ${error.message}</p>`;
    }
}

fetchAndDisplayPosts();

