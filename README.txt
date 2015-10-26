This zip archive contains the code and customizations necessary to implement
the Janrain Capture widget on your website. See the working demo at:

    http://pse.janrain.com/customer_dev/20a52726bb2e/


Description of Files
--------------------

Each of the HTML files in the root directory is an example landing page for a 
particular flow. The code in these files should be integrated into your 
website.

For each HTML file there is a corresponding Javascript file in the "scripts/" 
directory. These contain Capture and Engage widget settings and some special 
markup with Janrain Template Language (JTL). We ask that you leave these 
Javascript files hosted on Janrain's server during the initial development 
process. This allows us to make changes and customizations more quickly 
without you needing to copy the markup updates for each change.

When your site is ready for production, you can host the Javascript on your 
own servers and embed the markup with JTL into your site's own markup. The 
Javascript files are included in this zip file for reference.


index.html, scripts/index.js

    This is the main sign in and registration page.

edit-profile.html, scripts/edit-profile.js

    This is the page for an end-user to edit their profile.

reset-password.html, scripts/reset-password.js

    This is the page for the link that is emailed to a user when they have 
    forgotten their password. Set the "password_recover_url" setting in your 
    Capture app to the URL at which this code has been integrated.

verify-email.html, scripts/verify-email.js

    This is the page for the link that is emailed to a user when they need to 
    verify their email. Set the "verify_email_url" setting in your 
    Capture app to the URL at which this code has been integrated.
