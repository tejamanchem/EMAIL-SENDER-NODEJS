# EMAIL-SENDER-NODEJS

Electronic Mail is a widely used method to transfer/exchange messages among people. We generally send the email with any software or application like Gmail, outlook, thunderbird mail, and yahoo, etc. We can also code the basic concept of these applications in a node.js app by using any third-party library which can interact with the networking systems and send an email.

#### Nodemailer:
There are various modules available for sending emails but the nodemailer is the most popular one and it provides us simple procedure and functionality to send mail. 

#### Features of Nodemailer:
It supports various features like adding HTML in the mail, Unicode characters, sending attachments with the text, etc.
It uses the simple mail transfer protocol (SMTP). Below is the step-by-step approach to be followed to integrate this module into our application.
#### Step 1:
 Module Installation: Write the command in the terminal to install nodemailer and then import at the top of your nodejs application.

npm install nodemailer

Now we are ready to import this into our application. 

const nodemailer = require('nodemailer');

##### Step 2:
 Create Transporter Object: There exists a createTransport method in nodemailer which accepts an object with some configurations and finally returns a transporter object. This object will be required later to send emails. 

const transporter = nodemailer.createTransport(transport[, defaults]);
Here we are using Gmail as a service just for sample purposes, Although nodemailer can be easily integrated with any other mail service. In Gmail, we can either make our account less secure or we can use the Oauth2 security authentication unless normally google will not allow sending any mail via node.js.

Less Secure Account: Visit this link to make your account less secure, after doing this we can create our working transporter object just with the username and password of your Gmail account.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20210830231840/ezgifcomgifmaker7.gif">

##### Using Oauth2: 
According to official docs here we need to provide client id, client secret, refresh token, and an access token along with the username and password. Follow the step-by-step approach to get these configurations from the google cloud console. 

1. Open Google Cloud Console: In this step, we will get our client id and client secret. Visit the google cloud console website and register/sign in yourself. Then proceed to API & Services section from the leftmost navigation bar. Now check out the dashboard and create a project. After this, visit the Oauth consent screen to register about your application in this step make sure to select user type external and add some/one Test Users. After this step, go to the credentials section and click on Create credentials and then choose Oauth2 ClientID and choose application type as a web application, also make sure to add redirect URI as OAuth playground (copy link from here). Finally, you’ll be successful to get your client_id and client_secret.

<img src='https://media.geeksforgeeks.org/wp-content/uploads/20210830205532/Final2.gif'>

2. Open the Oauth2 Playground: Here we will get our refresh token and access token. Visit the OAuth2 playground, Click on the
oauth2.0 configuration icon from the right and then check the use your own credentials checkbox and provide the same client id and secret you’ve got from the cloud console. Now select the Gmail API for authorization. Click on Authorize API and then authorize it by the same Gmail id you have been filled as a test user in the credentials section of the last step. Finally, click on the exchange author

<img src='https://media.geeksforgeeks.org/wp-content/uploads/20210830205824/Final1.gif'>

#### Note:
We suggest you open these gifs in a separate tab and follow both approaches separately and don’t skip at any span this would save you from a lot of confusion, Also don’t try to copy this client id and client secret, etc. it will not going to work.

With this our transporter object is ready and now we can send our emails. 

#### Step 3:
Configure eMail: Before sending the mail we have to create some message configurations like what to send where to send etc. It is super easy to create these configurations there are several key-value pairs, from which you can provide the required ones along with some other values to the predefined key.

Sending a simple text to one email:
#### Step 4: 
Send eMail: Use any one of the above approaches to proceed with the transporter object, and then choose any one email configurations to send mail.
There exists a sendMail method in the transporter object which accepts email configurations and a callback function that will be executed either when mail has been sent or due to an error.

#### Step 5:
Combine them All
You can pick any options from the step 2 and 3. After providing it to the sendMail method you will be successfully able to send an email with node.js.

#### Explanation:
 Here we have imported the nodemailer module in the beginning and then used the Oauth2 type of authentication, later there is the most basic message configuration which is being used. Finally, the sendMail method is sending the mail to receivers provided in message configuration.
Note:- The secure module being imported has nothing to do with this nodemailer, I have just used it to secure my credentials. 

