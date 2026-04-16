const nodemailer = require("nodemailer");

// Configure your email service
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || "mubashshirk7666@gmail.com",
    pass: process.env.GMAIL_PASSWORD || "", // Use App Password for Gmail
  },
});

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ message: "OK" }),
    };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    // Validate inputs
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    // Create email HTML
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #8b7500 0%, #a89500 100%); padding: 20px; border-radius: 8px; color: white; text-align: center; margin-bottom: 30px;">
          <h2 style="margin: 0; font-size: 28px; font-weight: bold;">L'ESSENCE PURE</h2>
          <p style="margin: 10px 0 0 0; font-size: 12px; letter-spacing: 2px;">PREMIUM FRAGRANCES</p>
        </div>

        <div style="padding: 30px; background-color: #f9f9f9; border-radius: 8px;">
          <h3 style="color: #1f2937; margin-top: 0; font-size: 18px;">New Message from Contact Form</h3>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #8b7500;">
            <p style="margin: 0 0 15px 0; color: #666;">
              <strong style="color: #1f2937;">From:</strong> ${name}
            </p>
            <p style="margin: 0 0 15px 0; color: #666;">
              <strong style="color: #1f2937;">Email:</strong> ${email}
            </p>
            <p style="margin: 0; color: #1f2937; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
              <strong>Message:</strong><br/>
              ${message}
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

          <p style="color: #666; font-size: 12px; margin: 0;">
            This message was sent from your L'Essence Pure website contact form.
          </p>
        </div>

        <div style="text-align: center; padding: 20px; color: #999; font-size: 11px;">
          <p style="margin: 0;">L'Essence Pure © 2026 | All rights reserved</p>
        </div>
      </div>
    `;

    // Send email to your address
    await transporter.sendMail({
      from: process.env.GMAIL_USER || "mubashshirk7666@gmail.com",
      to: process.env.GMAIL_USER || "mubashshirk7666@gmail.com",
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: emailHTML,
    });

    // Send confirmation email to user
    const confirmationHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #8b7500 0%, #a89500 100%); padding: 20px; border-radius: 8px; color: white; text-align: center; margin-bottom: 30px;">
          <h2 style="margin: 0; font-size: 28px; font-weight: bold;">L'ESSENCE PURE</h2>
          <p style="margin: 10px 0 0 0; font-size: 12px; letter-spacing: 2px;">PREMIUM FRAGRANCES</p>
        </div>

        <div style="padding: 30px; background-color: #f9f9f9; border-radius: 8px;">
          <h3 style="color: #1f2937; margin-top: 0; font-size: 20px;">Thank You for Contacting Us</h3>
          
          <p style="color: #666; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
            Hello ${name},
          </p>

          <p style="color: #666; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
            We have received your message and appreciate you taking the time to reach out to L'Essence Pure. Our team will review your inquiry and get back to you as soon as possible.
          </p>

          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #8b7500;">
            <p style="margin: 0 0 10px 0; color: #666; font-size: 13px;">
              <strong style="color: #1f2937;">Your Message Reference:</strong><br/>
              ${new Date().toLocaleString()}
            </p>
          </div>

          <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 20px 0;">
            In the meantime, feel free to explore our collection of premium fragrances at
            <a href="https://lessencepure.com" style="color: #8b7500; text-decoration: none; font-weight: bold;">L'Essence Pure</a>.
          </p>

          <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 20px 0;">
            <strong>Contact Information:</strong><br/>
            📧 <a href="mailto:Support@essscents.in" style="color: #8b7500; text-decoration: none;">Support@essscents.in</a><br/>
            📞 +91 90216 44307
          </p>
        </div>

        <div style="text-align: center; padding: 20px; color: #999; font-size: 11px;">
          <p style="margin: 0;">L'Essence Pure © 2026 | All rights reserved</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER || "mubashshirk7666@gmail.com",
      to: email,
      subject: "L'Essence Pure - We've Received Your Message",
      html: confirmationHTML,
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Email sent successfully!",
        success: true,
      }),
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: "Failed to send email",
        details: error.message,
      }),
    };
  }
};
