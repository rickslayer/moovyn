import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/App.css'

export default class PrivacyPolicy extends React.Component {
    componentDidMount() {
        document.title = 'Privacy - Policy | Moovyn App Indoor Mapping and Marketing';
      }
    render() {
        return (
            <Container>
                <Row className="text-center container-pp mt-5">
                     <Col md={{span:12}} className="text-left">
                        <Link to="/" class="links">/Home</Link>
                    </Col>
                    <Col md={{ span: 8, offset: 2 }}>
                        
                        
                        <h1 className="mt-5">PRIVACY POLICY</h1>
                        <h2>MOOVYN</h2>
                        <h4 className="title-pp">Last updated [12 17, 2020]</h4>
                        <p className="text-justify p-2">Moovyn Tecnologia e Informação Ltda (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our mobile application (the “Application”).   Please read this Privacy Policy carefully.  IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE APPLICATION. </p>

                        <p className="text-justify p-2">We reserve the right to make changes to this Privacy Policy at any time and for any reason.  We will alert you about any changes by updating the “Last updated” date of this Privacy Policy.  You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Application after the date such revised Privacy Policy is posted.</p>

                        <p className="text-justify p-2">This Privacy Policy does not apply to the third-party online/mobile store from which you install the Application or make payments, including any in-game virtual items, which may also collect and use data about you.  We are not responsible for any of the data collected by any such third party. </p>
                        <h2 className="mt-3 text-left">COLLECTION OF YOUR INFORMATION</h2>
                        <p className="text-justify p-2">We may collect information about you in a variety of ways.  The information we may collect via the Application depends on the content and materials you use, and includes:</p>  

                        <h4 className="mt-3 text-left">Personal Data</h4>
                        <p className="text-justify p-2">Demographic and other personally identifiable information (such as your name and email address) that you voluntarily give to us when choosing to participate in various activities related to the Application, such as chat, posting messages in comment sections or in our forums, liking posts, sending feedback, and responding to surveys.  If you choose to share data about yourself via your profile, online chat, or other interactive areas of the Application, please be advised that all data you disclose in these areas is public and your data will be accessible to anyone who accesses the Application.</p>

                        <h4 className="mt-3 text-left">Derivative Data  </h4>
                        <p className="text-justify p-2">Information our servers automatically collect when you access the Application, such as your native actions that are integral to the Application, including liking, re-blogging, or replying to a post, as well as other interactions with the Application and other users via server log files.</p>  
                        <h4 className="mt-3 text-left">Facebook Permissions </h4> 
                        <p className="text-justify p-2">The Application may by default access your Facebook basic account information, including your name, email, gender, birthday, current city, and profile picture URL, as well as other information that you choose to make public. We may also request access to other permissions related to your account, such as friends, checkins, and likes, and you may choose to grant or deny us access to each individual permission. For more information regarding Facebook permissions, refer to the Facebook Permissions Reference page.</p>

                        <h4 className="mt-3 text-left">Data from Social Networks</h4>  
                        <p className="text-justify p-2">User information from social networking sites, such as [Apple, Facebook, Google+ Instagram, Pinterest, Twitter], including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks. This information may also include the contact information of anyone you invite to use and/or join the Application.</p>

                        <h4 className="mt-3 text-left">Geo-Location Information </h4>
                        <p className="text-justify p-2">We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using the Application, to provide location-based services. If you wish to change our access or permissions, you may do so in your device’s settings.</p>

                        <h4 className="mt-3 text-left">Mobile Device Access </h4>
                        <p className="text-justify p-2">We may request access or permission to certain features from your mobile device, including your mobile device’s [bluetooth, calendar, camera, contacts, microphone, reminders, sensors, SMS messages, social media accounts, storage,] and other features. If you wish to change our access or permissions, you may do so in your device’s settings.</p>

                        <h4 className="mt-3 text-left">Mobile Device Data </h4>
                        <p className="text-justify p-2">Device information such as your mobile device ID number, model, and manufacturer, version of your operating system, phone number, country, location, and any other data you choose to provide.</p>

                        <h4 className="mt-3 text-left">Push Notifications </h4>
                        <p className="text-justify p-2">We may request to send you push notifications regarding your account or the Application. If you wish to opt-out from receiving these types of communications, you may turn them off in your device’s settings.</p>

                        <h4 className="mt-3 text-left">Third-Party Data </h4>
                        <p className="text-justify p-2">Information from third parties, such as personal information or network friends, if you connect your account to the third party and grant the Application permission to access this information.</p>

                        <h4 className="mt-3 text-left">Data From Contests, Giveaways, and Surveys </h4>
                        <p className="text-justify p-2">Personal and other information you may provide when entering contests or giveaways and/or responding to surveys.</p>

                        <h2 className="mt-3 text-left">USE OF YOUR INFORMATION</h2>
                        <p className="text-justify p-2">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience.  Specifically, we may use information collected about you via the Application to: </p>
                            <ul className="text-left list-unstyled">
                            <li>1. Administer sweepstakes, promotions, and contests. </li>
                            <li>2. Assist law enforcement and respond to subpoena.</li>
                            <li>3. Compile anonymous statistical data and analysis for use internally or with third parties. </li>
                            <li>4. Create and manage your account.</li>
                            <li>5. Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Application to you. </li>
                            <li>6. Email you regarding your account or order.</li>
                            <li>7. Enable user-to-user communications.</li>
                            <li>8. Fulfill and manage purchases, orders, payments, and other transactions related to the Application.</li>
                            <li>9. Generate a personal profile about you to make future visits to the Application more personalized.</li>
                            <li>10. Increase the efficiency and operation of the Application.</li>
                            <li>11. Monitor and analyze usage and trends to improve your experience with the Application.</li>
                            <li>12. Notify you of updates to the Application.</li>
                            <li>13. Offer new products, services, mobile applications, and/or recommendations to you.</li>
                            <li>14. Perform other business activities as needed.</li>
                            <li>15. Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                            <li>16. Process payments and refunds.</li>
                            <li>17. Request feedback and contact you about your use of the Application. </li>
                            <li>18. Resolve disputes and troubleshoot problems.</li>
                            <li>19. Respond to product and customer service requests.</li>
                            <li>20. Send you a newsletter.</li>
                            <li>21. Solicit support for the Application.</li>
                            <li>22. [Other]</li>
                            </ul>

                            <h2 className="mt-3 text-left">DISCLOSURE OF YOUR INFORMATION</h2>
                            <p className="text-justify p-2">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>

                            <h4 className="mt-3 text-left">By Law or to Protect Rights </h4>
                            <p className="text-justify p-2">If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.  This includes exchanging information with other entities for fraud protection and credit risk reduction.</p>

                        <h4 className="mt-3 text-left">Third-Party Service Providers </h4>
                        <p className="text-justify p-2"> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.  </p>

                        <h4 className="mt-3 text-left">Marketing Communications</h4>
                        <p className="text-justify p-2">With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.</p>

                        <h4 className="mt-3 text-left">Interactions with Other Users </h4>
                        <p className="text-justify p-2">If you interact with other users of the Application, those users may see your name, profile photo, and descriptions of your activity, including sending invitations to other users, chatting with other users, liking posts, following blogs. </p>

                        <h4 className="mt-3 text-left">Online Postings</h4>
                        <p className="text-justify p-2">When you post comments, contributions or other content to the Applications, your posts may be viewed by all users and may be publicly distributed outside the Application in perpetuity</p>

                        <h4 className="mt-3 text-left">Third-Party Advertisers </h4>
                        <p className="text-justify p-2">We may use third-party advertising companies to serve ads when you visit the Application. These companies may use information about your visits to the Application and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you. </p>

                        <h4 className="mt-3 text-left">Affiliates </h4>
                        <p className="text-justify p-2">We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.</p>

                        <h4 className="mt-3 text-left">Business Partners </h4>
                        <p className="text-justify p-2">We may share your information with our business partners to offer you certain products, services or promotions. </p>

                        <h4 className="mt-3 text-left">Offer Wall  </h4>
                        <p className="text-justify p-2">The Application may display a third-party-hosted “offer wall.”  Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for acceptance and completion of an advertisement offer.  Such an offer wall may appear in the Application and be displayed to you based on certain data, such as your geographic area or demographic information.  When you click on an offer wall, you will leave the Application.  A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account.    </p>

                        <h4 className="mt-3 text-left">Social Media Contacts  </h4>
                        <p className="text-justify p-2">If you connect to the Application through a social network, your contacts on the social network will see your name, profile photo, and descriptions of your activity.</p>

                        <h4 className="mt-3 text-left">Other Third Parties</h4>
                        <p className="text-justify p-2">We may share your information with advertisers and investors for the purpose of conducting general business analysis. We may also share your information with such third parties for marketing purposes, as permitted by law. </p>

                        <h4 className="mt-3 text-left">Sale or Bankruptcy </h4>
                        <p className="text-justify p-2">If we reorganize or sell all or a portion of our assets, undergo a merger, or are acquired by another entity, we may transfer your information to the successor entity.  If we go out of business or enter bankruptcy, your information would be an asset transferred or acquired by a third party.  You acknowledge that such transfers may occur and that the transferee may decline honor commitments we made in this Privacy Policy. </p>
                        <p className="text-justify p-2">We are not responsible for the actions of third parties with whom you share personal or sensitive data, and we have no authority to manage or control third-party solicitations.  If you no longer wish to receive correspondence, emails or other communications from third parties, you are responsible for contacting the third party directly. </p>
                        <h2 className="mt-3 text-left">TRACKING TECHNOLOGIES</h2>
                        <h4 className="mt-3 text-left">Cookies and Web Beacons</h4>
                        <p className="text-justify p-2"> We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Application to help customize the Application and improve your experience. When you access the Application, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Application. You may not decline web beacons. However, they can be rendered ineffective by declining all cookies or by modifying your web browser’s settings to notify you each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis.</p>

                        <h4 className="mt-3 text-left">Internet-Based Advertising</h4>
                        <p className="text-justify p-2">Additionally, we may use third-party software to serve ads on the Application, implement email marketing campaigns, and manage other interactive marketing initiatives.  This third-party software may use cookies or similar tracking technology to help manage and optimize your online experience with us.  For more information about opting-out of interest-based ads, visit the Network Advertising Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.</p>

                        <h4 className="mt-3 text-left">Website Analytics </h4>
                        <p className="text-justify p-2">We may also partner with selected third-party vendors[, such as [Adobe Analytics,] [Clicktale,] [Clicky,] [Cloudfare,] [Crazy Egg,] [Flurry Analytics,] [Google Analytics,] [Heap Analytics,] [Inspectlet,] [Kissmetrics,] [Mixpanel,] [Piwik,] and others], to allow tracking technologies and remarketing services on the Application through the use of first party cookies and third-party cookies, to, among other things, analyze and track users’ use of the Application, determine the popularity of certain content, and better understand online activity. By accessing the Application, you consent to the collection and use of your information by these third-party vendors. You are encouraged to review their privacy policy and contact them directly for responses to your questions. We do not transfer personal information to these third-party vendors. However, if you do not want any information to be collected and used by tracking technologies, you can install and/or update your settings for one of the following: </p>
                        <ul className="text-left list-unstyled">
                          <li>[Adobe Privacy Choices Page]</li>
                          <li>[Clicktale Opt-Out Feature]</li>
                          <li>[Crazy Egg Opt-Out Feature]</li>
                          <li>[Digital Advertising Alliance Opt-Out Tool]</li>
                          <li>[Flurry Analytics Yahoo Opt-Out Manager]</li>
                          <li>[Google Analytics Opt-Out Plugin]  </li>
                          <li>[Google Ads Settings Page]</li>
                          <li>[Inspectlet Opt-Out Cookie]</li>
                          <li>[Kissmetrics Opt-Out Feature]</li>
                          <li>[Mixpanel Opt-Out Cookie]</li>
                          <li>[Network Advertising Initiative Opt-Out Tool] </li>
                        </ul>

                        <p className="text-justify p-2">You should be aware that getting a new computer, installing a new browser, upgrading an existing browser, or erasing or otherwise altering your browser’s cookies files may also clear certain opt-out cookies, plug-ins, or settings.</p>
                        <h2 className="mt-3 text-left">THIRD-PARTY WEBSITES</h2>
                        <p className="text-justify p-2">The Application may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Application, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or applications that may be linked to or from the Application.</p>
                        <h2 className="mt-3 text-left">SECURITY OF YOUR INFORMATION</h2>
                        <p className="text-justify p-2">We use administrative, technical, and physical security measures to help protect your personal information.  While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.  Any information disclosed online is vulnerable to interception and misuse by unauthorized parties.  Therefore, we cannot guarantee complete security if you provide personal information.</p>
                        <h2 className="mt-3 text-left">POLICY FOR CHILDREN</h2>
                        <p className="text-justify p-2">We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below. </p>
                        <h2 className="mt-3 text-left">CONTROLS FOR DO-NOT-TRACK FEATURES  </h2>
                        <p className="text-justify p-2">Most web browsers and some mobile operating systems [and our mobile applications] include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.  No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.  If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy.  </p>
                        <h2 className="mt-3 text-left">OPTIONS REGARDING YOUR INFORMATION</h2>
                        <h4 className="mt-3 text-left">[Account Information]</h4>
                        <p className="text-justify p-2">You may at any time review or change the information in your account or terminate your account by:</p>
                            <ul className="text-left">
                            <li>Logging into your account settings and updating your account</li>
                            <li>Contacting us using the contact information provided below</li>
                            <li>[Other]</li>
                            </ul>
                        <p className="text-justify p-2">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.]</p>
                        <h4 className="mt-3 text-left">Emails and Communications</h4>
                        <p className="text-justify p-2">If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by:</p>
                        <ul className="text-left">
                            <li>Noting your preferences at the time you register your account with the Application</li>
                            <li>Logging into your account settings and updating your preferences.</li>
                            <li>Contacting us using the contact information provided below</li>
                        </ul>
                        <p className="text-justify p-2">If you no longer wish to receive correspondence, emails, or other communications from third parties, you are responsible for contacting the third party directly. </p>
                        <h2 className="mt-3 text-left">CALIFORNIA PRIVACY RIGHTS</h2>
                        <p className="text-justify p-2">California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>

                        <p className="text-justify p-2">If you are under 18 years of age, reside in California, and have a registered account with the Application, you have the right to request removal of unwanted data that you publicly post on the Application. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California.  We will make sure the data is not publicly displayed on the Application, but please be aware that the data may not be completely or comprehensively removed from our systems.</p>
                        <h2 className="mt-3 text-left">CONTACT US</h2>
                        <p className="text-justify p-2">If you have questions or comments about this Privacy Policy, please contact us at:</p>
                        <ul className="text-left list-unstyled font-weight-bold">
                            <li>Moovyn Tecnologia e Informação Ltda </li>
                            <li>Rua Gentile Pezzoli Santangelo, 205</li>
                            <li>Aruja, SP – 07434-510</li>
                            <li><a className="links" href="tel:+55-11-984-248-382">+55 (11) 98424-8382</a></li>
                            <li><a className="links" href="mailto:contact@moovyn.app">contact@moovyn.app</a> </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span:12}} className="text-center">
                        <Link to="/" title="Home">
                           <Image src="img/logo-moovyn.png" width="200" fluid></Image>
                        </Link>  
                    </Col>
                </Row>
            </Container>
        )
    }
}
