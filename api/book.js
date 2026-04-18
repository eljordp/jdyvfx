import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, type, details } = req.body

  if (!name || !email || !type || !details) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    await resend.emails.send({
      from: 'jdyvfx.com <onboarding@resend.dev>',
      to: 'yeah8133730@gmail.com',
      replyTo: email,
      subject: `Booking — ${type}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${type}</p>
        <hr />
        <p><strong>Details:</strong></p>
        <p>${details.replace(/\n/g, '<br />')}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
