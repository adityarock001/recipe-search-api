<h1>Recipe Search API with Ingredient Suggestions</h1>

<h3>Overview</h3>
<p>This project is a <strong>Recipe Search API</strong> built with Node.js that allows users to search for recipes based on ingredients they have.
  The API integrates with a third-party recipe database like <strong>Spoonacular</strong> to fetch recipe data. It also features user management, JWT authentication, and the ability to save favorite recipes.</p>

<h2>Features</h2>
<ul>
    <li><strong>User Management</strong>
        <ul>
            <li>Signup, login, and profile update functionality.</li>
            <li>Passwords are securely hashed using <code>bcrypt</code>.</li>
            <li>JWT Authentication for secured access.</li>
        </ul>
    </li>
    <li><strong>Recipe Search</strong>
        <ul>
            <li>Search for recipes by providing ingredients.</li>
            <li>Data fetched from Spoonacular API.</li>
            <li>Includes information like ingredients, cooking instructions, and an image.</li>
        </ul>
    </li>
    <li><strong>Favorite Recipes</strong>
        <ul>
            <li>Users can save and manage their favorite recipes.</li>
        </ul>
    </li>
    <li><strong>Database</strong>
        <ul>
            <li>User data are stored in a MongoDB.</li>
        </ul>
    </li>
    <li><strong>Input Validation</strong>
        <ul>
            <li>Input validation using custom validation logic.</li>
        </ul>
    </li>
    <li><strong>API Documentation</strong>
        <ul>
            <li>API routes are fully documented.</li>
        </ul>
    </li>
</ul>

<h2>Tech Stack</h2>
<ul>
    <li><strong>Node.js</strong>: Backend framework.</li>
    <li><strong>Express.js</strong>: Web framework for Node.js.</li>
    <li><strong>JWT</strong>: JSON Web Token for authentication.</li>
    <li><strong>bcrypt</strong>: Hashing user passwords for security.</li>
    <li><strong>Spoonacular API</strong>: Used for fetching recipe data.</li>
    <li><strong>MongoDB</strong>: NoSQL database for storing user data.</li>
    <li><strong>Mongoose</strong>: ODM for MongoDB.</li>
    <li><strong>axios</strong>: HTTP client for calling third-party recipe API.</li>
    <li><strong>Swagger</strong>: API documentation.</li>
    <li><strong>Postman</strong>: Used for API testing.</li>
</ul>

<h2>Setup and Installation</h2>

<h3>Prerequisites</h3>
<ul>
    <li>Node.js installed on your system.</li>
    <li>MongoDB database installed and running.</li>
    <li>A free Spoonacular API key. Get it from <a href="https://spoonacular.com/food-api">Spoonacular</a>.</li>
</ul>

<h3>Clone the Repository</h3>
<pre><code>git clone https://github.com/adityarock001/recipe-search-api.git
cd recipe-search-api
</code></pre>

<h3>Install Dependencies</h3>
<pre><code>npm install</code></pre>

<h3>Set Up Environment Variables</h3>
<p>Create a <code>.env</code> file in the root directory and add the following environment variables:</p>

<pre><code>PORT=3000
JWT_SECRET=your-jwt-secret
SPOONACULAR_API_KEY=your-spoonacular-api-key
</code></pre>

<h3>Start the Server</h3>
<pre><code>nodemon start</code></pre>

<p>Your API will be running at <code>http://localhost:3000</code>.</p>


<h2>How to Use</h2>
<p>1. Register or login using the /api/user/signup or /api/user/login endpoints.</p>
<p>2. After successful login, you'll receive a JWT token. Use this token to authenticate further requests by adding it to the Authorization header: <code>Authorization: Bearer <code>your_jwt_token</code></code></p>
<p>3. Use the recipe search endpoint to search for recipes by ingredients.</p>
<p>4. Add or remove recipes from your favorites using the respective endpoints.</p>


<h2>Testing the API</h2>
<p>A Postman collection is given below for easy testing of the API. Import the collection into Postman and test the various endpoints.</p>
<a href="https://api.postman.com/collections/28528466-46166c88-fccf-4460-a623-c839f128fdd5?access_key=<your-access-key>">Postman Collection</a>

