import React from 'react';
import Footer from '../../components/Layout/footer';
import Header1 from '../../components/Layout/Header1';

const Privacy = () => {
  return (
    <div>
      <Header1 />
      <div>
        <div className="bg-[url('https://i.imgur.com/yam0Jgt.png')] h-44">
          <h4 className="pt-24 pb-10 ml-36 text-white text-3xl">Privacy Policy</h4>
        </div>
        <div>
          <div className="mx-36">
            <p className="my-10">
              The privacy of Fundable users and their information is extremely important to Fundable
              LLC and we take this matter very seriously. <br />
              All users of Fundable are covered by the following Privacy Policy. Fundable reserves
              the right to update this Privacy Policy. If required to do so, or it is in our best
              interest, Fundable may release user information in compliance with law enforcement
              agencies. <br />
              Persons under the age of 18 are prohibited from using Fundable and any associated
              services. These individuals are therefore not authorized to submit any private
              information to the system and Fundable LLC accepts no liability for such actions.
            </p>

            <h5 className="mb-2 font-bold mt-4 text-xl">1. Contact Information</h5>

            <p>
              Upon registering as a Fundable user, certain contact information such as your name,
              email address, and mailing address may be collected. This serves as an example and is
              not intended to be a complete list of information that may be collected at
              registration.
            </p>

            <h5 className="mb-2 font-bold mt-4 text-xl">2. Fundable.com</h5>

            <p>
              Fundable.com is an online service that allows startups to connect with individuals who
              are interested in helping to support them by pledging money in exchange for a reward
              upon a successful fundraise. Only users who are manually approved will be able to
              launch a campaign on the site.
            </p>

            <h5 className="mb-2 font-bold mt-4 text-xl">3. System Emails</h5>

            <p>
              <br />
              As part of the normal functions of the Fundable platform, we will send you email
              regarding your transactions on the site. We will keep these emails limited to a
              minimum.
              <br />
              Fundable will send you system generated emails and promotional materials. These
              communications may begin during the registration process and continue while your
              account remains on the Fundable platform.
              <br />
              Startups will receive the email addresses of their backers if the project is
              successfully funded through a Fundable campaign in order to help ensure proper
              delivery of rewards to backers among other communication. Startups that are not
              successful funded will not receive their backers email addresses as no further
              communication would be warranted.
            </p>

            <h5 className="mb-2 font-bold mt-4 text-xl">4. Internet</h5>

            <p>
              As part of our efforts to provide better services to Fundable users, Fundable LLC
              collects certain information related to the Internet and your computer. In order for
              us to analyze trends and provide superior service to our users, Fundable LLC retrieves
              the web address (URL) of both the website that you visited directly before and
              directly after visiting the Fundable site. We also receive certain other information
              about your personal computer such as the unique IP address. Fundable LLC also follows
              a standard practice of using cookies and logs to analyze website usage. Cookies a
              extremely small files that are stored on your computer and help us to provide you with
              a better experience by automatically recalling your preferences each time you visit
              our site. Cookies will not harm your computer in any way and can be deleted at any
              time.
            </p>

            <h5>5. Profile</h5>

            <p>
              Following registration, Fundable users will be prompted to complete a profile. Current
              users can also make changes to their own user profile. A user profile may contain, but
              is not limited to, your name, a personal statement, your work experience, goals, and
              any items contained on a resume. You should use good judgment about the information
              that you post in your profile since this can be viewed by others on the Fundable. Your
              personal contact information CANNOT be viewed unless you release this information.
              Additionally, the information in your profile can be edited at your discretion at any
              time.
            </p>

            <h5 className="mb-2 font-bold mt-4 text-xl">6. Account Preferences</h5>

            <p>
              You may make changes to your Fundable account and any associated preferences at any
              time. To make changes, you must log onto the Fundable and make any edits through the
              My Account section. You may also request to terminate your Fundable account. To
              request a removal of your account, please contact us.
            </p>

            <h5 className="mb-2 font-bold mt-4 text-xl">7. Startups</h5>

            <p>
              By entering into our User Agreement, Fundable Startups agree to not abuse other users'
              personal information. Abuse is defined as using personal information for any purpose
              other than those explicitly specified in the Startup’s Project, or is not related to
              fulfilling delivery of a product or service explicitly specified in the Project
              Creator’s Project.
            </p>

            <h5 className="mb-2 font-bold mt-4 text-xl">8. Affiliate Services</h5>

            <p>
              WePay processes all of the transactions on Fundable. No one sees your credit card
              information besides WePay, not even us.
            </p>
            <h5 className="mb-2 font-bold mt-4 text-xl">9. Questions</h5>

            <p>If you have a question about this privacy policy, please contact us at:</p>

            <p>© 2018 FundsGo</p>

            <p>&nbsp;</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
