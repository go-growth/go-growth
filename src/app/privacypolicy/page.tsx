import React from "react";

export default function PrivacyPolicy() {
  const styles = {
    // container: {
    //   fontFamily: "'Inter', Arial, sans-serif",
    //   lineHeight: "1.7",
    //   color: "#222",
    //   backgroundColor: "#fff",
    //   padding: "40px 20px",
    //   maxWidth: "900px",
    //   margin: "0 auto",
    // },
    // h1: {
    //   fontSize: "2rem",
    //   marginBottom: "10px",
    //   color: "#111",
    // },
    // h2: {
    //   fontSize: "1.4rem",
    //   marginTop: "30px",
    //   borderLeft: "4px solid #ffcc00",
    //   paddingLeft: "10px",
    //   color: "#111",
    // },
    // h3: {
    //   fontSize: "1.1rem",
    //   marginTop: "20px",
    //   color: "#000",
    // },
    ul: {
      margin: "10px 0 20px 20px",
    },
    p: {
      marginBottom: "10px",
    },
    strong: {
      color: "#000",
    },
    link: {
      color: "#0066cc",
      textDecoration: "none",
    },
  };

  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>
        <em>Last updated: [Insert Date]</em>
      </p>

      <h2>1. Introduction</h2>
      <p style={styles.p}>
        Welcome to <strong style={styles.strong}>GoGrowth</strong> (“Company”,
        “we”, “us”, or “our”). We are a digital marketing agency based in India
        that provides services such as SEO, paid advertising, website
        development, and marketing analytics to help brands grow online.
      </p>
      <p style={styles.p}>
        This Privacy Policy explains how we collect, use, and protect your
        personal information when you visit our website{" "}
        <a
          href="https://gogrowth.in"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          https://gogrowth.in
        </a>{" "}
        or engage with our services. By using our website or submitting your
        information, you agree to the terms outlined in this policy.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>A. Information You Provide Directly</h3>
      <ul style={styles.ul}>
        <li>Name, email address, phone number, and company name (via contact
          forms or inquiries).</li>
        <li>Business details, project requirements, and budget information you
          voluntarily share.</li>
        <li>Payment and billing details (if applicable for service contracts).</li>
      </ul>

      <h3>B. Automatically Collected Information</h3>
      <ul style={styles.ul}>
        <li>IP address, browser type, device information, operating system, and
          referral source.</li>
        <li>Pages visited, time spent, and interactions with website features.</li>
        <li>Cookies and analytics identifiers used to understand traffic and
          improve experience.</li>
      </ul>

      <h3>C. Third-Party Data</h3>
      <ul style={styles.ul}>
        <li>
          Information shared via advertising or analytics tools (e.g., Google
          Analytics, Meta Pixel, LinkedIn Insights) that help us measure
          campaign performance.
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul style={styles.ul}>
        <li>Provide and manage our marketing and web development services.</li>
        <li>Communicate with you regarding projects, proposals, and updates.</li>
        <li>Improve our website experience, campaigns, and service offerings.</li>
        <li>Deliver targeted ads or remarketing campaigns (as per your consent).</li>
        <li>Analyse website traffic and performance metrics.</li>
        <li>Fulfil legal or contractual obligations.</li>
      </ul>
      <p style={styles.p}>
        We will <strong style={styles.strong}>never sell or rent your data</strong> to third parties.
      </p>

      <h2>4. Cookies and Tracking Technologies</h2>
      <p style={styles.p}>
        Our website uses cookies and similar technologies to:
      </p>
      <ul style={styles.ul}>
        <li>Analyse website traffic and user behaviour.</li>
        <li>Personalize content and ads.</li>
        <li>Improve site functionality and performance.</li>
      </ul>
      <p style={styles.p}>
        You can disable cookies via your browser settings; however, some features may not function properly without them.
      </p>

      <h2>5. Data Sharing and Disclosure</h2>
      <p style={styles.p}>We may share your information only under these conditions:</p>
      <ul style={styles.ul}>
        <li>
          <strong>Service Providers:</strong> With trusted partners (e.g.,
          hosting, analytics, payment gateways, advertising platforms) who
          process data on our behalf under strict confidentiality.
        </li>
        <li>
          <strong>Legal Requirements:</strong> When required by law, court order,
          or regulatory authorities.
        </li>
        <li>
          <strong>Business Operations:</strong> In the event of a merger,
          acquisition, or asset transfer, provided adequate data protection
          measures are maintained.
        </li>
      </ul>
      <p style={styles.p}>
        We ensure all third-party vendors comply with reasonable security
        practices under Indian law.
      </p>

      <h2>6. Data Retention</h2>
      <p style={styles.p}>
        We retain personal data only for as long as necessary to fulfil the
        purposes stated in this policy or as required by applicable law. When
        data is no longer needed, it is securely deleted or anonymized.
      </p>

      <h2>7. Your Rights</h2>
      <p style={styles.p}>Under Indian law, you have the right to:</p>
      <ul style={styles.ul}>
        <li>Access the personal information we hold about you.</li>
        <li>Request corrections or updates to inaccurate data.</li>
        <li>Withdraw consent for marketing communications.</li>
        <li>Request deletion of your personal data, where legally permissible.</li>
      </ul>
      <p style={styles.p}>
        You can exercise these rights by contacting us at{" "}
        <strong>[insert contact email]</strong>.
      </p>

      <h2>8. Data Security</h2>
      <p style={styles.p}>
        We implement industry-standard technical and organizational security
        measures to safeguard your information from unauthorized access,
        disclosure, alteration, or destruction. However, no online platform is
        completely risk-free; you use the website at your own discretion.
      </p>

      <h2>9. International Data Transfers</h2>
      <p style={styles.p}>
        Some of our service providers (such as analytics or cloud platforms) may
        process data outside India. By using our website or services, you
        consent to such transfers, subject to adequate protection measures.
      </p>

      <h2>10. Third-Party Links</h2>
      <p style={styles.p}>
        Our website may contain links to external websites or tools. We are not
        responsible for their privacy practices or content. We recommend
        reviewing their respective privacy policies before sharing personal
        data.
      </p>

      <h2>11. Updates to This Policy</h2>
      <p style={styles.p}>
        We may update this Privacy Policy periodically to reflect legal or
        operational changes.
      </p>

      {/* <h2 style={styles.h2}>12. Contact Us</h2>
      <p style={styles.p}>
        If you have questions, concerns, or requests regarding this Privacy
        Policy, please contact:
      </p>
      <p style={styles.p}>
        <strong>GoGrowth</strong>
        <br />
        Email: [insert contact email]
        <br />
        Website:{" "}
        <a
          href="https://gogrowth.in"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          https://gogrowth.in
        </a>
        <br />
        Address: [insert business address]
      </p> */}
    </div>
  );
}
