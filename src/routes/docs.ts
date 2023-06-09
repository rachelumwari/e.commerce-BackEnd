/**
 * @swagger
 * tags:
 *  name: Products
 *  description: Endpoints that handles product actions
 */
/**
 * @swagger
 * /cart/clear:
 *   delete:
 *     summary: clear cart
 *     tags: [Cart]
 *     security:
 *       - authsecurity: []
 *     produces:
 *       - application/json
 *     responses:
 *       "200":
 *         description: cleared the cart.
 *       "400":
 *         description: cart is already empty
 */

/**
 * @swagger
 * /cart/add/{productID}:
 *   post:
 *     summary: Add a product to the cart
 *     tags: [Cart]
 *     description: Adds a product to the user's cart based on the provided product ID
 *     parameters:
 *       - in: path
 *         name: productID
 *         description: ID of the product to be added to the cart
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product added successfully
 *       400:
 *         description: Invalid product ID provided
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /cart/remove/{cartitemid}:
 *   delete:
 *     summary: remove a productfrom the cart
 *     tags: [Cart]
 *     description: Adds a product to the user's cart based on the provided product ID
 *     parameters:
 *       - in: path
 *         name: cartitemid
 *         description: ID of the cartitem to be removed from the cart
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: item removed successfully
 *       401:
 *         description: unauthorized
 *       404:
 *         description: item not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /products/search:
 *  get:
 *      tags:
 *          - Products
 *      summary: Endpoint for searching products based on the product name or description
 *      parameters:
 *        - in: query
 *          name: q
 *          schema:
 *            type: string
 *          description: The query string to search for products
 *      responses:
 *          200:
 *              description: Products matching the search query are fetched successfully
 *          500:
 *              description: Something went wrong while fetching products
 */
/**
 * @swagger
 * /cart/view:
 *   get:
 *     tags:
 *       - Cart
 *     name: cart
 *     summary: Retrieve cart
 *     consumes:
 *        - application/json
 *     responses:
 *       200:
 *             description:  successfully Retrieved.
 *       400:
 *             description: you are not a buyer 
 * */

/**
 * @swagger
 * /products/add:
 *  post:
 *      tags:
 *          - Products
 *      summary: Endpoint for adding product with its images
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                     type: object
 *                     properties:
 *                          pname:
 *                              type: string
 *                              required: true
 *                              example: "Computer"
 *                          p_price:
 *                              type: number
 *                              required: true
 *                              example: "250000"
 *                          desc:
 *                              type: string
 *                              required: true
 *                              example: "HP computer with 1TB SSD 16GB RAM"
 *                          quantity:
 *                              type: number
 *                              required: false
 *                              example: "4"
 *                          imgs:
 *                              type: array
 *                              required: true
 *                              items:
 *                                  type: file
 *      responses:
 *          200:
 *              description: May be product is added with no images or other error
 *          201:
 *              description: Product details and images are saved
 *          400:
 *              description: Bad request
 *          403:
 *              description: You do not have permissions to add a product
 *          404:
 *              description: Invalid or missing security token
 *
 */

/**
 * @swagger
 * /products/allSellerCollection:
 *  get:
 *      tags:
 *          - Products
 *      summary: Endpoint for getting all seller's products
 *      responses:
 *          200:
 *              description: All seller's products are fetched successfully
 *          403:
 *              description: You should login as a seller to view products
 *          404:
 *              description: User token not found! try logging in
 *          500:
 *              description: Something went wrong while fetching products
 */

/**
 * @swagger
 * /products/update/{id}:
 *   patch:
 *     tags:
 *       - Products
 *     summary: Update an existing product with its images
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the product to be updated
 *         required: true
 *         schema:
 *           type: string
 *           minimum: 1
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               pname:
 *                 type: string
 *                 description: The name of the product
 *               p_price:
 *                 type: number
 *                 description: The price of the product
 *               desc:
 *                 type: string
 *                 description: The description of the product
 *               imgs:
 *                 type: array
 *                 description: Array of updated product images
 *                 items:
 *                   type: file
 *     responses:
 *       200:
 *         description: Product and images updated successfully
 *       400:
 *         description: Bad request
 *       403:
 *         description: You do not have permissions to update a product
 *       404:
 *         description: Product not found
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve all products for users || seller collection
 *     tags:
 *       - Products
 *     security: []
 *     produces:
 *       - application/json
 *     responses:
 *       "200":
 *         description: Successfully retrieved all products.
 */

/**
 * @swagger
 * /products/available/{productId}:
 *   patch:
 *     tags:
 *       - Products
 *     summary: Update the availability of a product
 *     security:
 *       - authsecurity: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - isAvailable
 *             properties:
 *               isAvailable:
 *                 type: boolean
 *                 description: The new availability status of the product
 *     responses:
 *       '201':
 *         description: Product details updated
 *       '400':
 *         description: The request was malformed or missing required data
 *       '403':
 *         description: The user does not have permission to update the product
 *       '404':
 *         description: The specified product ID does not exist
 */

/**
 * @swagger
 * /products/{productId}:
 *   get:
 *     summary: Get one product by product ID
 *     security:
 *       - authsecurity: []
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID of the product to return
 *     responses:
 *       '201':
 *         description: Product returned successfully
 *       '400':
 *         description: Server Error
 *       '404':
 *         description: Product Not found
 */

/**
 * @swagger
 * /products/wishlist/add/{id}:
 *  post:
 *      tags:
 *          - Products
 *      summary: Endpoint for a buyer to add product on his/her wishlist
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Product ID
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *          202:
 *              description: Your wish has been added.
 *          400:
 *              description: Invalid request
 *          401:
 *              description: You're not logged in
 *          403:
 *              description: No token provided
 *          404:
 *              description: Product not found
 *          406:
 *              description: Invalid signature/token
 *          409:
 *              description: Product is already on your wishlist
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     tags:
 *       - users
 *     summary: all Users
 *     security: []
 *     requestBody:
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: object
 *                 required:
 *                    - email
 *                    - firstName
 *                    - lastName
 *                    - password
 *                    - phone_number
 *                 properties:
 *                    email:
 *                      type: string
 *                    firstName:
 *                      type: string
 *                    lastName:
 *                       type: string
 *                    password:
 *                       type : string
 *                    phone_number:
 *                       type : string
 *     responses:
 *       201:
 *             description: successfully logged in;
 *
 * */

/**
 * @swagger
 * /verify-email/{token}:
 *   post:
 *     tags:
 *       - users
 *     summary: Verify email
 *     security: []
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: token
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: Email verified successfully, Please Sign In.
 * */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in  into your account to get more prevalleges
 *     tags:
 *       - users
 *     requestBody:
 *       description: Please fill all required fields
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                 type: object
 *                 required:
 *                    - email
 *                    - password
 *                 properties:
 *                    email:
 *                      type: string
 *                    password:
 *                       type : string
 *     responses:
 *       '200':
 *         description: user log in succesfully
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Log out of the current user session
 *     tags:
 *       - users
 *     responses:
 *       '200':
 *         description: User logged out successfully
 *       '401':
 *         description: Unauthorized request
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - users
 *     name: users
 *     summary: Retrieve all users
 *     security:
 *       - authsecurity: []
 *     consumes:
 *        - application/json
 *     responses:
 *       200:
 *             description:  successfully Retrieved.
 * */

/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *     tags:
 *       - users
 *     summary: Delete a user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: Successfully Deleted.
 *       400:
 *             description: Bad request.
 * */

/**
 * @swagger
 * /resetpassword/link:
 *   post:
 *     tags:
 *       - users
 *     summary: send token to email 
 *     security: []
 *     requestBody:
 *        required: true
 *        content:
 *           application/json:

 *              schema:
 *                 type: object
 *                 required:                    
 *                    - email
 *                 properties:                 
 *                    email:
 *                      type: string          
 *     responses:
 *       201:
 *             description: check your email for the verification token;
 *       
 * */

/**
 * @swagger
 * /changepassword/{useremail}/{token}:
 *   patch:
 *     tags:
 *       - users
 *     summary: Change the user's password using a token
 *     security: []
 *     parameters:
 *       - name: useremail
 *         in: path
 *         description: The email of the user whose password is being changed
 *         required: true
 *         schema:
 *           type: string
 *       - name: token
 *         in: path
 *         description: The token required to change the user's password
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newpassword:
 *                 type: string
 *                 description: The user's new password
 *               confirmpass:
 *                 type: string
 *                 description: The user's new password confirmation
 *     responses:
 *       200:
 *         description: The user's password has been changed successfully
 */

//UPDATE PASSWORD

/**
 * @swagger
 * /update-password:
 *   patch:
 *     tags:
 *       - users
 *     summary: Update user password
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email
 *                 required: true
 *               oldPassword:
 *                 type: string
 *                 description: The user's old password
 *                 required: true
 *               newPassword:
 *                 type: string
 *                 description: The user's new password
 *                 required: true
 *               confirmPassword:
 *                 type: string
 *                 description: The user's new password, confirmed
 *                 required: true
 *     responses:
 *       '200':
 *         description: The user's password has been changed successfully
 *       '400':
 *         description: Bad request
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /profile/edit:
 *   patch:
 *     summary: Update user profile details
 *     description: Update the user's profile details and billing and shipping addresses
 *     tags:
 *       - Profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               profileDetails:
 *                 type: object
 *                 properties:
 *                   phoneNumber:
 *                     type: string
 *                     example: "+250788000000"
 *                   gender:
 *                     type: string
 *                     example: "Female"
 *                   birthdate:
 *                     type: string
 *                     format: date-time
 *                     example: "2023-02-19T11:55:10.439Z"
 *                   language:
 *                     type: string
 *                     example: "kinyarwanda"
 *               billingAddress:
 *                 type: object
 *                 properties:
 *                   streetAddress:
 *                     type: string
 *                     example: "kk509"
 *                   city:
 *                     type: string
 *                     example: "kigali"
 *                   stateOrProvince:
 *                     type: string
 *                     example: "kigali"
 *                   zipOrPostalCode:
 *                     type: string
 *                     example: "00000"
 *                   country:
 *                     type: string
 *                     example: "Rwanda"
 *               address:
 *                 type: object
 *                 properties:
 *                   streetAddress:
 *                     type: string
 *                     example: "kk509"
 *                   city:
 *                     type: string
 *                     example: "kigali"
 *                   stateOrProvince:
 *                     type: string
 *                     example: "kigali"
 *                   zipOrPostalCode:
 *                     type: string
 *                     example: "00000"
 *                   country:
 *                     type: string
 *                     example: "Rwanda"
 *     responses:
 *       200:
 *         description: Successfully updated profile details
 *       400:
 *         description: Invalid request body
 *       401:
 *         description: Unauthorized - missing or invalid authentication token
 *       403:
 *         description: Forbidden - user is not authorized to access this resource
 *       500:
 *         description: Internal server error
 */

/**
 * Get user profile by ID
 * @swagger
 * /profile/{userId}:
 *   get:
 *     summary: Get user profile by ID
 *     description: Retrieve user profile by ID
 *     tags:
 *       - Profile
 *     security: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user profile
 *     responses:
 *       '200':
 *         description: A user profile object
 *       '404':
 *         description: User profile not found
 *       '500':
 *         description: Internal server error
 */

/**
 * Get all user profiles
 * @swagger
 * /profiles:
 *   get:
 *     summary: Get all user profiles
 *     description: Retrieve all user profiles
 *     tags:
 *       - Profile
 *     security: []
 *     responses:
 *       '200':
 *         description: An array of user profile objects
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: API for managing roles
 * /role:
 *   post:
 *     summary: Create a new role
 *     security:
 *       - authsecurity: []
 *     tags: [Roles]
 *     requestBody:
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: object
 *                 required:
 *                    - name
 *                    - description
 *                 properties:
 *                    name:
 *                      type: string
 *                      description: The name of the role
 *                    description:
 *                      type: string
 *                      description: A description of the role
 *     responses:
 *       201:
 *         description: Role created successfully
 *       400:
 *         description: Invalid request payload
 *       500:
 *         description: Internal server error
 *
 *
 */

/**
 * @swagger
 * /role/{name}:
 *   patch:
 *     summary: Update role by name
 *     security:
 *       - authsecurity: []
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the role to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the role
 *               description:
 *                 type: string
 *                 description: A brief description of the updated role
 *     responses:
 *       '201':
 *         description: Role successfully updated
 */

/**
 * @swagger
 * /role/{name}:
 *   get:
 *     summary: Get a role by name
 *     security:
 *       - authsecurity: []
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the role
 *     responses:
 *       '200':
 *         description: Role successfully retrieved
 */

/**
 * @swagger
 * /role:
 *   get:
 *     summary: Retrieve all roles
 *     tags: [Roles]
 *     security:
 *       - authsecurity: []
 *     produces:
 *       - application/json
 *     responses:
 *       "200":
 *         description: Successfully retrieved all roles.
 */

/**
 * @swagger
 * /role/{name}:
 *   delete:
 *     summary: Delete a role by name
 *     security:
 *       - authsecurity: []
 *     tags:
 *       - Roles
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the role to delete
 *     responses:
 *       '200':
 *         description: Role successfully deleted
 */

/**
 * @swagger
 * /authorize:
 *   patch:
 *     summary: Update a role by user email
 *     security:
 *       - authsecurity: []
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - roleName
 *             properties:
 *               email:
 *                 type: string
 *                 description: email of the user to update their role
 *               roleName:
 *                 type: string
 *                 description: The update role name for the user
 *     responses:
 *       '201':
 *         description: Role successfully updated
 */

// ////////////////////////////////////////

/**
 * @swagger
 * tags:
 *   name: Permissions
 *   description: API for managing permissions
 * /permission:
 *   post:
 *     summary: Create a new permission
 *     security:
 *       - authsecurity: []
 *     tags: [Permissions]
 *     requestBody:
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: object
 *                 required:
 *                    - name
 *                    - description
 *                 properties:
 *                    name:
 *                      type: string
 *                      description: The name of the permission
 *                    description:
 *                      type: string
 *                      description: A description of the permission
 *     responses:
 *       201:
 *         description: Permission created successfully
 *       400:
 *         description: Invalid request payload
 *       500:
 *         description: Internal server error
 *
 *
 */

/**
 * @swagger
 * /permission/{name}:
 *   patch:
 *     summary: Update permission by name
 *     security:
 *       - authsecurity: []
 *     tags: [Permissions]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the permission to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the permission
 *               description:
 *                 type: string
 *                 description: A brief description of the updated permission
 *     responses:
 *       '201':
 *         description: Permission successfully updated
 */

/**
 * @swagger
 * /permission/{name}:
 *   get:
 *     summary: Get a permission by name
 *     security:
 *       - authsecurity: []
 *     tags: [Permissions]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the permission
 *     responses:
 *       '200':
 *         description: Permission successfully retrieved
 */

/**
 * @swagger
 * /permission:
 *   get:
 *     summary: Retrieve all permissions
 *     security:
 *       - authsecurity: []
 *     tags: [Permissions]
 *     produces:
 *       - application/json
 *     responses:
 *       "200":
 *         description: Successfully retrieved all permissions.
 */

/**
 * @swagger
 * /permission/{name}:
 *   delete:
 *     summary: Delete a permission by name
 *     security:
 *       - authsecurity: []
 *     tags:
 *       - Permissions
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the permission to delete
 *     responses:
 *       '200':
 *         description: Permission successfully deleted
 */

/**
 * @swagger
 * /sendcode/{phone}:
 *  get:
 *      tags:
 *          - users
 *      summary: Send code (OTP) to user-provided phone number
 *      security: []
 *      parameters:
 *          - in: path
 *            name: phone
 *            schema:
 *                  type: string
 *            description: Phone Number
 *            required: true
 *      responses:
 *          200:
 *              description: OTP is successfully sent
 *          400:
 *              description: Invalid phone number
 */

/**
 * @swagger
 * /verify/{phone}/{code}:
 *  get:
 *      tags:
 *          - users
 *      summary: Verify user-provided OTP
 *      security: []
 *      parameters:
 *          - in: path
 *            name: phone
 *            schema:
 *                  type: string
 *            description: Phone number
 *            required: true
 *
 *          - in: path
 *            name: code
 *            schema:
 *                  type: string
 *            description: Code sent on Phone
 *            required: true
 *      responses:
 *          200:
 *             description: Verification successfully
 *          400:
 *             description: Invalid phone or code
 *          404:
 *             description: Incorrect OTP
 */
